import Image from "next/image";
import { FC, useState } from "react";
import BasicPage from "../../components/BasicPage";
import { SvgCaret } from "../../components/Icons";
import { DietModification, GeneData, GeneModification, mobGenetics, reverseMobDiets, reverseMobGenetics } from "../../data/mobGenetics";

const geneticsByMobId = "genetics-by-id"
const geneticsByDietId = "genetics-by-diet"
const geneticsByGeneId = "genetics-by-gene"

const MobGeneticsPage = () => {

  const [indexCollapsed, setIndexCollapsed] = useState(true)

  return (
    <BasicPage pageName="Genetics Guide" pageDesc="This guide shows you the genetics generated by different mobs.">
      <div className="flex flex-row">
        <div className={(indexCollapsed ? "-translate-x-full w-0" : "w-64") + " flex-shrink-0 h-[calc(100vh-3.5rem)] sticky top-0 bg-neutral-900 overflow-visible transition-all"}>
          <button onClick={() => setIndexCollapsed(!indexCollapsed)} className="absolute -right-8 top-2 w-8 h-8 z-50 flex items-center justify-center">
            <span className={(indexCollapsed ? "-rotate-90" : "rotate-90") + " transition-transform text-gray-400 hover:text-gray-200"}>
              <SvgCaret className="w-8" />
            </span>
          </button>
          <div className="w-full h-full overflow-y-scroll dumbcode-scrollbar">
            <MobGeneticsIndex />
          </div>
        </div>
        <div className="flex flex-grow flex-col m-10 overflow-x-hidden">
          <h1 className="text-5xl font-semibold text-white">Genetics Guide</h1>
          <div className="pr-10 pt-2 text-white">
            This guide shows you the genetics generated by different mobs.
          </div>
          <MobGeneticsByMob />
          <MobGeneticsByDiet />
          <MobGeneticsByGene />
        </div>
      </div>
    </BasicPage>
  );
}

const MobGeneticsIndex = () => {
  return (
    <div className="mx-5 my-2 text-white">
      <h2 className="text-4xl font-semibold text-white">Index</h2>

      <CollapsableIndex id={geneticsByMobId} title="Genetics By Mob">
        {mobGenetics.map((genetics, i) => <a key={i} href={`#${formatEntity(genetics)}`} >{genetics.name}</a>)}
      </CollapsableIndex>

      <CollapsableIndex id={geneticsByDietId} title="Genetics By Diet">
        {Array.from(reverseMobDiets.keys()).sort().map((diet, i) => <a key={i} href={`#${formatDiet(diet)}`} >{diet}</a>)}
      </CollapsableIndex>

      <CollapsableIndex id={geneticsByGeneId} title="Genetics By Gene">
        {Array.from(reverseMobGenetics.keys()).sort().map((gene, i) => <a key={i} href={`#${formatGene(gene)}`} >{gene}</a>)}
      </CollapsableIndex>
    </div>
  )
}

const CollapsableIndex: FC<{ id: string, title: string }> = ({ id, title, children }) => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <div className="p-1 border-b last:border-none">
      <div className="flex flex-row items-center">
        <a href={`#${id}`}>{title}</a>
        <button onClick={() => setCollapsed(!collapsed)} className={"ml-2 transition-transform " + (collapsed ? "-rotate-90" : "")}>
          <SvgCaret className="w-3" />
        </button>
      </div>
      <div className="ml-5 flex flex-col">
        {!collapsed && children}
      </div>
    </div>
  )
}

const MobGeneticsByMob = () => {
  return (
    <div className="mt-5">
      <a id={geneticsByMobId} href={`#${geneticsByMobId}`} className="text-4xl font-semibold text-white">Genetics By Mob</a>
      {mobGenetics.map((geneData, i) => <MobGeneticEntry key={i} geneData={geneData} />)}
    </div>
  )
}


type ColourData = { colours: string[], varient?: string }

const MobGeneticEntry = ({ geneData }: { geneData: GeneData }) => {
  const id = formatEntity(geneData)
  const colourData = geneData.colours.reduce<ColourData[]>((array, colour) => {
    if (typeof colour === "string") {
      array[0].colours.push(colour)
    } else {
      array.push({
        colours: typeof colour.colour === "string" ? [colour.colour] : colour.colour,
        varient: colour.varient
      })
    }
    return array
  }, [
    { colours: [] }
  ])

  return (
    <div className="mt-10">
      <a href={`#${id}`} id={id} className="text-2xl font-semibold text-white">{geneData.name}</a>
      <div className="flex flex-row">
        <div className="flex-shrink-0 w-32 h-32 relative mt-2 mr-2">
          <Image alt={`Entity ${geneData.name}`} layout="fill" objectFit="contain" src={`/images/guides/genetics/${geneData.image}`} />
        </div>
        <div className="flex-grow flex flex-col ">
          {geneData.geneModifications.length !== 0 &&
            <div className="mb-2">
              <h4 className="text-lg font-semibold text-white">Genes:</h4>
              {geneData.geneModifications.map((g, i) => <MobGeneModificationEntry key={i} modification={g} />)}
            </div>
          }
          {geneData.dietModifications !== undefined && geneData.dietModifications.length !== 0 &&
            <div className="mb-2">
              <h4 className="text-lg font-semibold text-white">Diet Changes:</h4>
              <div className="flex flex-row">
                {geneData.dietModifications.map((diet, i) => <MobDietModificationEntry key={i} diet={diet} />)}
              </div>
            </div>
          }
          {colourData.length !== 0 &&
            <div className="mb-2">
              <h4 className="text-lg font-semibold text-white">Colors:</h4>
              <div className="flex flex-row flex-wrap">
                {colourData.filter(c => c.colours.length !== 0).map((colour, i) => <MobColourCell key={i} colour={colour} />)}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}


const MobGeneModificationEntry = ({ modification }: { modification: GeneModification }) => {
  const positive = modification.amount > 0
  return (
    <div className="flex flex-row">
      <a href={`#${formatGene(modification.gene)}`} className="text-white">
        {modification.gene}:
      </a>
      <span className={(positive ? "text-green-600" : "text-red-600") + " ml-2"}>
        {positive ? "+" : "-"}{Math.round(Math.abs(modification.amount) * 100)}%
      </span>
    </div>
  )
}

const MobDietModificationEntry = ({ diet }: { diet: DietModification }) => {
  return (
    <div className="flex flex-col text-white mr-10">
      <a href={`#${formatDiet(diet.name)}`} className="font-semibold text-white">{diet.name}</a>
      <div className="w-16 h-16 relative mt-2 mr-2">
        <Image alt={`Diet ${diet.name}`} layout="fill" objectFit="contain" src={`/images/guides/genetics/${diet.image}`} />
      </div>
      <span className="text-blue-600">+{diet.water} Water</span>
      <span className="text-amber-600">+{diet.food} Food</span>
    </div>
  )
}

const MobColourCell = ({ colour }: { colour: ColourData }) => {
  return (
    <div className="w-48 h-8 m-1 relative border-2 border-black">
      <div className="z-0 absolute w-full h-full flex flex-row">
        {colour.colours.map((colour, i) => <div className="flex-grow" key={i} style={{ backgroundColor: colour }} />)}
      </div>
      <div className="absolute font-semibold text-gray-500 mix-blend-difference w-full h-full flex justify-center items-center">
        {colour.varient}
      </div>
    </div>
  )
}






const MobGeneticsByDiet = () => {
  return (
    <div className="mt-5">
      <a id={geneticsByDietId} href={`#${geneticsByDietId}`} className="text-4xl font-semibold text-white mt-32">Genetics By Diet</a>
      {Array.from(reverseMobDiets.keys()).sort().map(key => {
        const dietInfo = reverseMobDiets.get(key)
        if (!dietInfo) {
          return <>!!ERROR!!</>
        }
        return <MobGeneticsByDietEntry key={key} name={key} data={dietInfo} />
      })}
    </div>
  )
}

const MobGeneticsByDietEntry = ({ name, data }: {
  name: string, data: {
    image: string;
    data: {
      mob: GeneData;
      diet: DietModification;
    }[];
  }
}) => {
  const id = formatDiet(name)
  return (
    <div key={name} className="mb-5 flex flex-col">
      <a href={`#${id}`} id={id} className="text-2xl font-semibold text-white">{name}</a>
      <div className="flex flex-row w-full">
        <div className="w-32 h-32 relative mt-2 mr-2">
          <Image alt={`Diet ${data.image}`} layout="fill" objectFit="contain" src={`/images/guides/genetics/${data.image}`} />
        </div>
        {data.data.map((info, i) => (
          <div key={i} className="flex flex-col mr-5">
            <a href={`#${formatEntity(info.mob)}`} className="text-white font-semibold">{info.mob.name}</a>
            <span className="text-blue-600">+{info.diet.water} Water</span>
            <span className="text-amber-600">+{info.diet.food} Food</span>
          </div>
        ))}
      </div>
    </div>
  )
}








const MobGeneticsByGene = () => {
  return (
    <div className="mt-5">
      <a id={geneticsByGeneId} href={`#${geneticsByGeneId}`} className="text-4xl font-semibold text-white mt-32">Genetics By Gene</a>
      {Array.from(reverseMobGenetics.keys()).sort().map(key => {
        const geneInfo = reverseMobGenetics.get(key)
        if (!geneInfo) {
          return <>!!ERROR!!</>
        }
        return <MobGeneticsByGeneEntry key={key} name={key} data={geneInfo} />
      })}
    </div>
  )
}

const MobGeneticsByGeneEntry = ({ name, data }: {
  name: string, data: {
    data: GeneData;
    amount: number;
  }[]
}) => {
  const id = formatGene(name)
  return (
    <div key={name} className="mb-5 flex flex-col">
      <a href={`#${id}`} id={id} className="text-2xl font-semibold text-white">{name}</a>
      {data.map((datum, i) => {
        const positive = datum.amount > 0
        return (
          <div key={i} className="flex flex-row">
            <a href={`#${formatEntity(datum.data)}`} className="text-white">
              {datum.data.name}:
            </a>
            <span className={(positive ? "text-green-600" : "text-red-600") + " ml-2"}>
              {positive ? "+" : "-"}{Math.round(Math.abs(datum.amount) * 100)}%
            </span>
          </div>
        )
      })}
    </div>)
}


const formatEntity = (entity: GeneData) => `entity-${entity.name.replace(/\s/g, "-").toLowerCase()}`
const formatDiet = (diet: string) => `diet-${diet.replace(/\s/g, "-").toLowerCase()}`
const formatGene = (gene: string) => `gene-${gene.replace(/\s/g, "-").toLowerCase()}`

export default MobGeneticsPage;
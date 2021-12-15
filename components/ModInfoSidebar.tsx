import { ModInfoType } from "../data/modData";
import { allMembers } from "../data/team";
import { SvgTwitter } from "./Icons";

const ModInfoSidebar = ({ modInfo }: { modInfo: ModInfoType }) => {

    return (
        <div className="w-96 bg-transparent text-white sticky">
            <h2 className="font-semibold pt-10">About</h2>
            <p className="text-xs pb-4">{ modInfo.description }</p>
            <div className="flex flex-row">
                <SvgTwitter className="w-4 h-4 pt-1 mt-0.5" />
                <a target="_blank" href={modInfo.source} className="text-xs ml-2 py-1 underline">View Source</a>
            </div>
            <div className="flex flex-row">
                <SvgTwitter className="w-4 h-4 pt-1 mt-0.5" />
                <a target="_blank" href={modInfo.wiki} className="text-xs ml-2 py-1 underline">View Wiki</a>
            </div>
            <div className="flex flex-row">
                <SvgTwitter className="w-4 h-4 pt-1 mt-0.5" />
                <a target="_blank" href={modInfo.license} className="text-xs ml-2 py-1 underline">View License</a>
            </div>
            <div className={ modInfo.download || "hidden"}>
                <h2 className="font-semibold pt-10">Get the mod</h2>
                <a target="_blank" href={modInfo.download} className="flex flex-row bg-blue-400 hover:bg-blue-500 rounded-md justify-center p-1.5 text-xs">
                    <SvgTwitter className="w-4 h-4 mr-2" />
                    Download
                </a>
            </div>
            <div>
                <h2 className="font-semibold pt-10">Contributors</h2>
                <div>
                    {modInfo.contributors.map((member, key) => <ContributorTag key={ member.name + key } member={member.name} role={member.role} />)}
                </div>
            </div>
        </div>
    );
}

const ContributorTag = ({ member, role }: { member: string, role: string }) => { 

    if (member === undefined) return(<></>);

    const memberData = allMembers.find(element => element.name.toLowerCase() === member.toLowerCase());
    const name = memberData?.name;
    const imageName = memberData?.imageName;

    return (
        <div className="flex flex-row my-1">
            <div className="h-8 w-8 mt-1 aspect-square rounded-full bg-center bg-cover mr-2" style={{ backgroundImage: `url("/images/people/${imageName}")` }}></div>
            <div>
                <p className="text-xs mt-0.5 underline">{name}</p>
                <p className="text-xs">{role.charAt(0).toUpperCase() + role.slice(1)}</p>
            </div>
        </div>
    );
}

export default ModInfoSidebar;
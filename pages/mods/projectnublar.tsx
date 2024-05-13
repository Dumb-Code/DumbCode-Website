import Link from "next/link";
import { Carousel2 } from "../../components/Carousel2";
import ModPage from "../../components/ModPage";
import { projectNublarInfo } from "../../data/modData";

const brachi = '/images/project_nublar/brachi.jpg'
const comp = '/images/project_nublar/comp.jpg'
const dilo = '/images/project_nublar/dilo.jpg'
const gali = '/images/project_nublar/gali.jpg'
const mosa = '/images/project_nublar/mosa.jpg'
const para = '/images/project_nublar/para.jpg'
const rex = '/images/project_nublar/rex.jpg'
const squad = '/images/project_nublar/squad.jpg'
const trike = '/images/project_nublar/trike.jpg'
const velo = '/images/project_nublar/velo.jpg'

const DumbLibraryPage = () => {
    return (
        <ModPage modInfo={projectNublarInfo}>

            <div className="w-full aspect-video mt-10">
                <Carousel2 images={[brachi, comp, dilo, gali, mosa, para, rex, squad, trike, velo]} autoAdvance={true} />
            </div>

            <section className="mt-10">
                <h1 className="text-3xl text-white">About</h1>
                <p className="text-neutral-500">Project Nublar is a mod that adds Dinosaurs to the world of Minecraft. It aims to bring creatures canon to the Jurassic Park novel and movie franchise in the game.</p>
            </section>

            <section className="mt-10">
                <h1 className="text-3xl text-white">Requirements</h1>
                <div className="text-neutral-500">Project Nublar Requires Geckolib and SmartBrainlib, which can be found on Curseforge.</div>
            </section>

            <section className="mt-10">
                <h1 className="text-3xl text-white">Release Date</h1>
                <p className="text-neutral-500">DumbCode plans to release a single beta for Project Nublar for (Neo)Forge/Fabric 1.20.1, after which all development will move to the lastest NeoForge and Fabric versions.<br />No dates have been set for release or the beta.</p>
            </section>

            <section className="mt-10 mb-20">
                <h1 className="text-3xl text-white">License</h1>
                <p className="text-neutral-500">GradleHook is licensed under the GNU Lesser General Public Licence v3.0 with no exceptions.</p>
            </section>

        </ModPage>
    );
}

export default DumbLibraryPage;
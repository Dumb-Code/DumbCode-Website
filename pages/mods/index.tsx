import { useRouter } from "next/router";
import BackgroundImage from "../../components/BackgroundImage";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const project_nublar = '/images/project_nublar/trike.jpg'
const dumb_library = '/images/dumb_library.bmp'
const gradlehook = '/images/gradle_hook.bmp'

const ModsPage = () => {
    return (
        <div className="overflow-x-hidden bg-neutral-800">
            <Header pageName="Mods" pageDesc="All of the DumbCode Mods" ogImage={{"path": project_nublar, width: 1280, height: 640}} />
            <Navbar />
            <section className="w-screen bg-neutral-800 pt-10 overflow-hidden">
                <div className="text-center lg:text-left my-10 lg:translate-x-44 w-full text-white">
                    <h1 className="text-6xl font-semibold">DumbCode Mods</h1>
                    <p className="font-semibold text-md text-neutral-500 ml-1">The cool stuff we&lsquo;ve made for players and modders.</p>
                </div>
            </section>

            <ModSection title="Project: Nublar" route="/mods/projectnublar" img={project_nublar} desc="Project Nublar is a mod that adds Dinosaurs to the world of Minecraft. It aims to bring creatures canon to the Jurassic Park novel and movie franchise in the game." />
            <ModSection title="DumbLibrary" route="/mods/dumblibrary" img={dumb_library} desc="A Minecraft modding library made for DumbCode mods. It includes animation, ECS, and other useful tools for creating mineraft mods." />
            <ModSection title="Gradlehook" route="/mods/gradlehook" img={gradlehook} desc="Adds a postRequest gradle task which simply posts a POST request along with the specified builds. Additional fields for the request can be specified. The request uses the user agent Mozilla/5.0 and has the content-type of multipart/form-data" />

            <Footer />
        </div>
    );
}

const ModSection = ({ title, desc, route, img }: { title: string, desc: string, route: string, img: string }) => {

    const router = useRouter();
    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        router.push(route);
    }

    return (
        <section className="w-screen bg-neutral-800 flex lg:flex-row flex-col-reverse md:mb-10 md:px-10 2xl:px-40 pb-10">
            <div className="md:rounded-b-md lg:rounded-t-md w-full lg:w-1/3 bg-neutral-900 transition-transform p-5 flex flex-col lg:mx-2">
                <h1 className="text-4xl text-white">{title}</h1>
                <p className="text-xs my-4 text-neutral-400">{desc}</p>
                <button className="bg-blue-500 hover:bg-blue-600 p-2 mt-8 rounded-md" onClick={handleClick}>View More</button>
            </div>
            <div className={"shadow-lg w-full lg:w-2/3 aspect-video transition-transform hover:rotate-0 md:rotate-0 lg:mx-2"}>
                <div className="aspect-video md:rounded-t-md lg:rounded-b-md bg-left bg-cover">
                    <BackgroundImage alt={title} className="rounded-md" src={img} />
                </div>
            </div>
        </section>
    );
}

export default ModsPage;
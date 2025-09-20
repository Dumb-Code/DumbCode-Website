import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SvgArtstation, SvgDeviantart, SvgDiscord, SvgGithub, SvgTwitter, SvgYoutube } from "../components/Icons";
import Navbar from "../components/Navbar";
import { currentMembers, CurrentMemberType, pastMembers, PastMembersType, primaryMembers, PrimaryMemberType } from "../data/team";

const TeamPage = () => {

    return (
        <div className="overflow-x-hidden bg-neutral-800">
            <Header pageName="Team" pageDesc="Meet the DumbCode Team" />
            <Navbar />
            <section className="w-screen bg-neutral-800 pt-10 overflow-hidden">
                <div className="text-center lg:text-left my-10 lg:translate-x-44 w-full text-white">
                    <h1 className="text-6xl font-semibold">DumbCode Members</h1>
                    <p className="font-semibold text-md text-neutral-500 ml-1">Our Amazing team of current and past contributors</p>
                </div>
            </section>
            <div className="bg-neutral-800 sm:px-10 grid lg:grid-cols-2 2xl:grid-cols-3 grid-flow-row">
                {primaryMembers.map((member, key) => <PrimaryMemberCard key={key} member={member} />)}
            </div>
            <div className="bg-neutral-900 bg-opacity-50 px-10 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 grid-flow-row">
                {currentMembers.map((member, key) => <MemberCard key={key} member={member} />)}
            </div>
            <div className="bg-neutral-800 px-10">
                <section className="w-screen bg-neutral-800 pt-10 overflow-hidden">
                    <div className="text-center lg:text-left my-10 lg:translate-x-44 w-full text-white">
                        <h1 className="text-6xl font-semibold">Past Members</h1>
                        <p className="font-semibold text-md text-neutral-500 ml-1">Those who helped us in the past.</p>
                    </div>
                </section>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 grid-flow-row">
                    {pastMembers.map((member, key) => <PastMemberCard key={key} member={member} />)}
                </div>
            </div>
            <Footer />
        </div>
    );
}

const PrimaryMemberCard = ({ member }: { member: PrimaryMemberType }) => {

    return (
        <div className="w-full mt-10 px-10 mb-10">
            <div className="w-48 aspect-square relative top-0 left-1/2 -translate-x-1/2 translate-y-24 -mt-32">
                <MemberBubble member={member.imageName} />
            </div>
            <div className="text-white bg-neutral-900 p-5 pt-24 w-full rounded-lg">
                <h1 className="text-center text-4xl">{member.name}</h1>
                <div className="flex flex-row w-full flex-wrap justify-center">
                    {member.roles.map((role, key) => <RoleTag key={member.name + "role" + key} role={role} />)}
                </div>
                <p className="px-10 text-neutral-400 text-center mt-1">{member.bio}</p>
                <div className="flex flex-row w-full pt-4">
                    <div className="flex-grow"></div>
                    {member.socials.map((social, key) => <SocialIcon key={member.name + "social" + key} platform={social.platform} route={social.link} primary={true} />)}
                    <div className="flex-grow"></div>
                </div>
            </div>
        </div>
    );
}

const MemberCard = ({ member }: { member: CurrentMemberType }) => {

    return (
        <div className="w-full mt-10 px-4 mb-10">
            <div className="w-32 aspect-square relative top-0 left-1/2 -translate-x-1/2 translate-y-16 -mt-24">
                <MemberBubble member={member.imageName} />
            </div>
            <div className="text-white bg-neutral-900 p-5 pt-16 w-full rounded-lg">
                <h1 className="text-center text-3xl">{member.name}</h1>
                <div className="flex flex-row w-full flex-wrap justify-center">
                    {member.roles.map((role, key) => <RoleTag key={member.name + "role" + key} role={role} />)}
                </div>
                <div className="flex flex-row w-full pt-2">
                    <div className="flex-grow"></div>
                    {member.socials.map((social, key) => <SocialIcon key={member.name + "social" + key} platform={social.platform} route={social.link} primary={true} />)}
                    <div className="flex-grow"></div>
                </div>
            </div>
        </div>
    );
}

const PastMemberCard = ({ member }: { member: PastMembersType }) => {
    return (
        <div className="w-full mt-10 px-4 mb-10">
            <div className="w-24 aspect-square relative top-0 left-1/2 -translate-x-1/2 translate-y-8 -mt-24">
                <MemberBubble member={member.imageName} />
            </div>
            <div className="text-white bg-neutral-900 px-2 pb-3 pt-8 w-full rounded-lg">
                <h1 className="text-center text-3xl">{member.name}</h1>
            </div>
        </div>
    );
}

const MemberBubble = ({ member }: { member: string }) => {

    return (
        <div className="aspect-square rounded-full bg-center bg-cover">
            <BackgroundImage alt={member} className="rounded-full aspect-square" src={`/images/people/${member}`} />
        </div>
    );
}

const SocialIcon = ({ platform, route, primary }: { platform: string, route: string, primary: boolean }) => {

    const primaryIconClasses = "h-full w-full text-center p-1.5";
    const memberIconClasses = "h-full w-full text-center p-1.5";

    const iconClasses = primary ? primaryIconClasses : memberIconClasses;

    var icon: JSX.Element;

    switch (platform) {
        case "discord":
            icon = <SvgDiscord className={iconClasses} />
            break;
        case "twitter":
            icon = <SvgTwitter className={iconClasses} />
            break;
        case "github":
            icon = <SvgGithub className={iconClasses} />
            break;
        case "youtube":
            icon = <SvgYoutube className={iconClasses} />
            break;
        case "deviantart":
            icon = <SvgDeviantart className={iconClasses} />
            break;
        case "artstation":
            icon = <SvgArtstation className={iconClasses} />
            break;
        default:
            icon = <></>;
    }

    if (platform === "discord") {
        return (
            <div className="px-2 hover:bg-neutral-700 rounded-full font-semibold transition-all mx-1 hover:scale-110 flex flex-row border border-white">
                <div className="h-8 w-8">{icon}</div>
                <p className="text-xs pt-1 translate-y-1">{route}</p>
            </div>
        );
    } else { 
        return (
            <a target="_blank" rel="noreferrer" href={route} className="relative hover:bg-neutral-700 h-8 w-8 rounded-full font-semibold transition-all mx-1 hover:scale-110 border border-white">
                {icon}
            </a>
        );
    }
}

const RoleTag = ({ role }: { role: string }) => {

    const programmerClasses = "border-red-600 bg-red-500 text-white";
    const modelerClasses = "border-orange-600 bg-orange-500 text-white";
    const webDevClasses = "border-fuchsia-600 bg-fuchsia-500 text-white";
    const texturerClasses = "border-green-600 bg-green-500 text-white";
    const animatorClasses = "border-lime-300 bg-lime-500 text-white";
    const soundArtistClasses = "border-yellow-600 bg-yellow-500 text-white";
    const graphicDesignerClasses = "border-amber-600 bg-amber-500 text-white";
    const conceptArtistClasses = "border-lime-400 bg-lime-300 text-white";

    var classes = "";
    var roleName = ""

    switch (role) {
        case "programmer":
            classes = programmerClasses;
            roleName = "Programmer";
            break;
        case "modeler":
            classes = modelerClasses;
            roleName = "Modeler";
            break;
        case "web_developer":
            classes = webDevClasses;
            roleName = "Web Developer";
            break;
        case "texture_artist":
            classes = texturerClasses;
            roleName = "Texture Artist";
            break;
        case "animator":
            classes = animatorClasses;
            roleName = "Animator";
            break;
        case "sound_artist":
            classes = soundArtistClasses;
            roleName = "Sound Artist";
            break;
        case "graphic_designer":
            classes = graphicDesignerClasses;
            roleName = "Graphic Designer";
            break;
        case "concept_artist":
            classes = conceptArtistClasses;
            roleName = "Concept Artist";
            break;
        default:
            roleName = "undefined"
            break;
    }

    return (
        <div className={"border m-0.5 bg-opacity-50 text-xs rounded-full flex-shrink px-2 " + classes}>
            {roleName}
        </div>
    );
}

export default TeamPage;
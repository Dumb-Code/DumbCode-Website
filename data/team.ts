export type SocialsType = { platform: string, link: string }
export type PrimaryMemberType = { name: string, imageName: string, bio: string, roles: string[], socials: SocialsType[] }
export type CurrentMemberType = { name: string, imageName: string, roles: string[], socials: SocialsType[] }
export type PastMembersType = { name: string, imageName: string }

export const primaryMembers: PrimaryMemberType[] = [
    {
        "name": "BrownBoiiWonder",
        "imageName": "brownboiwonder.png",
        "bio": "Brownboii is the team's lead Modeler, their main contributions to the team are the machine & fence models and most of Project Nublar's dinosaur models.",
        "roles": ["modeler"],
        "socials": [
            { "platform": "discord", "link": "brownboiiwonder" },
            { "platform": "github", "link": "https://github.com/kashgummaraju%22%7D" }
        ]
    },
    {
        "name": "Wyn Price",
        "imageName": "wynprice.png",
        "bio": "Wyn Price is the DumbCode programming mastermind. His efforts include programming the Mods, and the backend of the new DumbCode Studio.",
        "roles": ["programmer", "web_developer"],
        "socials": [
            { "platform": "discord", "link": "wynprice" },
            { "platform": "twitter", "link": "https://twitter.com/wyn_price" },
            { "platform": "github", "link": "https://github.com/Wyn-Price" },
            { "platform": "youtube", "link": "https://www.youtube.com/channel/UCUh1aG2Aa1m59kwzVlBjojA" }
        ]
    },
    {
        "name": "NeusFear",
        "imageName": "neusfear.png",
        "bio": "NeusFear is the team's Web frontend Developer, their main contributions to the team are the design of the DumbCode Studio, the websites, among various asset contributions for the Project Nublar Mod",
        "roles": ["programmer", "web_developer"],
        "socials": [
            { "platform": "discord", "link": "neusfear" },
            { "platform": "twitter", "link": "https://twitter.com/NeusFear" },
            { "platform": "github", "link": "https://github.com/NeusFear" },
            { "platform": "youtube", "link": "https://www.youtube.com/channel/UCVNgt2sHMnhpIveeKeSAyVQ" },
            { "platform": "artstation", "link": "https://www.artstation.com/neusfear" },
            { "platform": "deviantart", "link": "https://www.deviantart.com/neusfear" }
        ],
    },
    {
        "name": "Mazikeen",
        "imageName": "mazikeen.png",
        "bio": "Mazikeen is one of the team's main texture artists, along with various asset contributions for the mod, Mazikeen is also part of the build team that is responsible for the asset showcases along with any in game builds related to the Project Nublar Mod",
        "roles": ["texture_artist"],
        "socials": [
            { "platform": "discord", "link": "maziikeenz" },
            { "platform": "twitter", "link": "https://twitter.com/Mazikeen143" },
        ]
    },
    {
        "name": "Omar",
        "imageName": "elyasisly.jpg",
        "bio": "Omar started out with DumbCode as a sound designer, working hard to give our dinosaurs the sounds in game that you're familiar with in the movies. Since then they've developed their skills as an animator and have been pivotal in making sure that these dinosaurs look and move realistically in game.",
        "roles": ["sound_artist", "animator"],
        "socials": [
            { "platform": "discord", "link": "omar_tuareg" },
            { "platform": "twitter", "link": "https://twitter.com/Ely27290042" },
            { "platform": "github", "link": "https://github.com/Elysisy" }
        ]
    },
    {
        "name": "ShadowTekStudio",
        "imageName": "shadowtek.jpg",
        "bio": "Shadow started with DumbCode in 2025, his main roles have been taking our ambitious plans and legacy codebase and updating it to the latest Minecraft versions so that you can play the beta along side your other favorite mods.",
        "roles": ["programmer"],
        "socials": [
            { "platform": "discord", "link": "qwort_int" },
            { "platform": "youtube", "link": "https://www.youtube.com/@shadowtekmain"},
            { "platform": "github", "link": "https://github.com/Tfarcenim" }
        ]
    }
]

export const currentMembers: CurrentMemberType[] = [
    {
        "name": "Lucca",
        "imageName": "lucca.png",
        "roles": ["graphic_designer", "concept_artist"],
        "socials": [
            { "platform": "discord", "link": "lucca2951" },
            { "platform": "twitter", "link": "https://twitter.com/Lucca2951" },
            { "platform": "artstation", "link": "https://www.artstation.com/lucca2951" },
        ]
    },
    {
        "name": "Brotat",
        "imageName": "brotat.png",
        //"bio": "Brotat is one of the team's main texture artists for the Project Nublar Mod. He works on both the dinosaurs and non dinosaur textures in order to make sure everything flows smoothly and the mod is released at a top notch quality.",
        "roles": ["texture_artist"],
        "socials": [
            { "platform": "discord", "link": "brotat" },
            { "platform": "twitter", "link": "https://twitter.com/Sunking64" },
            { "platform": "github", "link": "https://github.com/Brotatsun64" },
            { "platform": "youtube", "link": "https://www.youtube.com/channel/UCGfffU8rEX43SmACBAFjUsQ" }
        ]
    },
    {
        "name": "Hyper",
        "imageName": "hyperion.png",
        //"bio": "Hyper is one of the animators for DumbCode. He contributes to the lifelike movement of most of the animals from Project Nublar.",
        "roles": ["animator"],
        "socials": [
            { "platform": "discord", "link": "notthathyper" },
            { "platform": "twitter", "link": "https://twitter.com/NotThatHyper" },
        ]
    }
]

export const pastMembers: PastMembersType[] = [
    {
        "name": "Codyrex",
        "imageName": "cody.png"
    },
    {
        "name": "jglrxavpok",
        "imageName": "jglrxavpok.png"
    },
    {
        "name": "Zenthic",
        "imageName": "zenthic.png"
    },
    {
        "name": "LordOfLustria",
        "imageName": "lustria.png"
    },
    {
        "name": "JTGhawk137",
        "imageName": "jack.jpg"
    },
    {
        "name": "Bastion",
        "imageName": "bastion.png"
    },
    {
        "name": "Dom",
        "imageName": "dom.png"
    },
    {
        "name": "Igrek",
        "imageName": "igrek.png"
    },
    {
        "name": "Ninni",
        "imageName": "ninni.png"
    },
    {
        "name": "Niruny",
        "imageName": "niruny.png"
    },
    {
        "name": "Raptorek",
        "imageName": "raptorek.png"
    },
    {
        "name": "ReaptorWhisper",
        "imageName": "raptorwhisper.png"
    },
    {
        "name": "Snow",
        "imageName": "snow.png"
    },
    {
        "name": "Wolfgank",
        "imageName": "wolfgank.png"
    },
    {
        "name": "Cucho",
        "imageName": "chucho.png"
    },
    {
        "name": "Mr.BizarreMegaloceros",
        "imageName": "bizarrealtispinax.webp"
    },
    {
        "name": "Gegy",
        "imageName": "gegy.png"
    },
    {
        "name": "Rodentman87",
        "imageName": "rodentman87.png"
    },
    {
        "name": "MX",
        "imageName": "mx.jpg"
    },
    {
        "name": "FloofHips",
        "imageName": "floofhips.jpg"
    },
    {
        "name": "Katostrophic",
        "imageName": "katostrophic.jpg"
    },
    {
        "name": "thebradqq",
        "imageName": "bbq.png"
    },
    {
        "name": "Fred",
        "imageName": "fred.png"
    },
    {
        "name": "Sindavar",
        "imageName": "sindavar.png"
    }
]

export const allMembers: PrimaryMemberType[] | CurrentMemberType[] | PastMembersType[] = [...primaryMembers, ...currentMembers, ...pastMembers];

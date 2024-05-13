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
            { "platform": "discord", "link": "Brownboiiwonder#0357" },
            { "platform": "github", "link": "https://github.com/kashgummaraju%22%7D" }
        ]
    },
    {
        "name": "Wyn Price",
        "imageName": "wynprice.png",
        "bio": "Wyn Price is the DumbCode programming mastermind. His efforts include programming the Mods, and the backend of the new DumbCode Studio.",
        "roles": ["programmer", "web_developer"],
        "socials": [
            { "platform": "discord", "link": "WynPrice#0001" },
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
            { "platform": "discord", "link": "NeusFear#5173" },
            { "platform": "twitter", "link": "https://twitter.com/NeusFear" },
            { "platform": "github", "link": "https://github.com/NeusFear" },
            { "platform": "youtube", "link": "https://www.youtube.com/channel/UCVNgt2sHMnhpIveeKeSAyVQ" },
            { "platform": "artstation", "link": "https://www.artstation.com/neusfear" },
            { "platform": "deviantart", "link": "https://www.deviantart.com/neusfear" }
        ],
    },
    {
        "name": "Brotat",
        "imageName": "brotat.png",
        "bio": "Brotat is one of the team's main texture artists for the Project Nublar Mod. He works on both the dinosaurs and non dinosaur textures in order to make sure everything flows smoothly and the mod is released at a top notch quality.",
        "roles": ["texture_artist"],
        "socials": [
            { "platform": "discord", "link": "Brotat#7369" },
            { "platform": "twitter", "link": "https://twitter.com/Sunking64" },
            { "platform": "github", "link": "https://github.com/Brotatsun64" },
            { "platform": "youtube", "link": "https://www.youtube.com/channel/UCGfffU8rEX43SmACBAFjUsQ" }
        ]
    },
    {
        "name": "Mazikeen",
        "imageName": "mazikeen.png",
        "bio": "Mazikeen is one of the team's main texture artists, along with various asset contributions for the mod, Mazikeen is also part of the build team that is responsible for the asset showcases along with any in game builds related to the Project Nublar Mod",
        "roles": ["texture_artist"],
        "socials": [
            { "platform": "discord", "link": "Mazikeen#7846" },
            { "platform": "twitter", "link": "https://twitter.com/Mazikeen143" },
        ]
    },
    {
        "name": "Hyper",
        "imageName": "hyperion.png",
        "bio": "Hyper is one of the animators for DumbCode. He contributes to the lifelike movement of most of the animals from Project Nublar.",
        "roles": ["animator"],
        "socials": [
            { "platform": "discord", "link": "Hyper#5603" },
            { "platform": "twitter", "link": "https://twitter.com/NotThatHyper" },
        ]
    }
]

export const currentMembers: CurrentMemberType[] = [
    {
        "name": "Sindavar",
        "imageName": "sindavar.png",
        "roles": ["texture_artist", "modeler"],
        "socials": [
            { "platform": "discord", "link": "Sindavar#0303" },
            { "platform": "twitter", "link": "https://twitter.com/sindavar33" },
            { "platform": "github", "link": "https://github.com/Sindavar" },
        ]
    },
    {
        "name": "Gegy",
        "imageName": "gegy.png",
        "roles": ["programmer"],
        "socials": [
            { "platform": "discord", "link": "Gegy#9970" },
            { "platform": "twitter", "link": "https://twitter.com/gegy1000" },
            { "platform": "github", "link": "https://github.com/Gegy" }
        ]
    },
    {
        "name": "Lucca",
        "imageName": "lucca.png",
        "roles": ["graphic_designer", "concept_artist"],
        "socials": [
            { "platform": "twitter", "link": "https://twitter.com/Lucca2951" },
            { "platform": "artstation", "link": "https://www.artstation.com/lucca2951" },
        ]
    },
    {
        "name": "FloofHips",
        "imageName": "floofhips.jpg",
        "roles": ["texture_artist"],
        "socials": [
            { "platform": "discord", "link": "Reda#8727" },
            { "platform": "twitter", "link": "https://twitter.com/FloofHips" },
            { "platform": "github", "link": "https://github.com/FloofHips" },
            { "platform": "youtube", "link": "https://youtube.com/c/FloofHips%22%7D" }
        ]
    },
    {
        "name": "Katostrophic",
        "imageName": "katostrophic.jpg",
        "roles": ["modeler", "texture_artist"],
        "socials": [
            { "platform": "discord", "link": "katostrophic#7421" },
            { "platform": "twitter", "link": "https://twitter.com/kat0strophic" },
            { "platform": "github", "link": "https://github.com/kat0strophic" }
        ]
    },
    {
        "name": "thebradqq",
        "imageName": "bbq.png",
        "roles": ["modeler", "texture_artist"],
        "socials": [
            { "platform": "discord", "link": "thebbq#8506" },
            { "platform": "github", "link": "https://github.com/bradleyq" },
            { "platform": "youtube", "link": "https://www.youtube.com/c/thebradqq" }
        ]
    },
    {
        "name": "MX",
        "imageName": "mx.jpg",
        "roles": ["animator"],
        "socials": [
            { "platform": "discord", "link": "emmmmm#7181" },
        ]
    },
    {
        "name": "Rodentman87",
        "imageName": "rodentman87.png",
        "roles": ["programmer"],
        "socials": [
            { "platform": "discord", "link": "Rodentman87#8787" },
            { "platform": "twitter", "link": "https://twitter.com/rodentman87" },
            { "platform": "github", "link": "https://github.com/rodentman87" },
        ]
    },
    {
        "name": "Omar_Tuareg",
        "imageName": "elyasisly.jpg",
        "roles": ["animator"],
        "socials": [
            { "platform": "discord", "link": "omarafrika" },
            { "platform": "twitter", "link": "https://twitter.com/omar_tuareg" },
            { "platform": "github", "link": "https://github.com/Elysisy" }
        ]
    },
    {
        "name": "Mr.BizarreMegaloceros",
        "imageName": "bizarrealtispinax.webp",
        "roles": ["modeler"],
        "socials": [
            { "platform": "discord", "link": "Mr.BizarreMegaloceros#1993" },
            { "platform": "twitter", "link": "https://twitter.com/BAltispinax" },
            { "platform": "github", "link": "https://github.com/BizarreAltispinax" }
        ]
    },
    {
        "name": "Fred",
        "imageName": "fred.png",
        "roles": ["texture_artist"],
        "socials": [
            { "platform": "discord", "link": "Fred.#5269" },
            { "platform": "twitter", "link": "https://twitter.com/_ItzFred" },
            { "platform": "github", "link": "https://github.com/ItzFred" }
        ]
    },
    {
        "name": "Nyfaria",
        "imageName": "nyfaria.png",
        "roles": ["programmer"],
        "socials": [
            { "platform": "discord", "link": "nyfaria" },
            { "platform": "twitter", "link": "https://twitter.com/TheNyfaria" },
            { "platform": "github", "link": "https://github.com/Nyfaria" }
        ]
    },
    {
        "name": "ItsMeNotjames",
        "imageName": "itsmenotjames.png",
        "roles": ["programmer"],
        "socials": [
            { "platform": "discord", "link": "itsmenotjames" }
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
    }
]

export const allMembers: PrimaryMemberType[] | CurrentMemberType[] | PastMembersType[] = [...primaryMembers, ...currentMembers, ...pastMembers];

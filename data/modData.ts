export type ModContributorType = { name: string, role: string }
export type ModGuideType = { name: string, route: string }
export type ModInfoType = {
    route: string,
    name: string,
    source: string,
    wiki: string,
    license: string,
    description: string,
    download: string,
    contributors: ModContributorType[],
    image: string,
    guides: ModGuideType[]
}

export const projectNublarInfo: ModInfoType = {
    route: "projectnublar",
    name: "Project Nublar",
    description: "Project Nublar is a mod for Minecraft that adds things related to Jurassic Park to the game.",
    source: "https://github.com/Dumb-Code/ProjectNublar",
    wiki: "https://github.com/Dumb-Code/ProjectNublar/wiki",
    license: "https://github.com/Dumb-Code/ProjectNublar/blob/master/LICENSE.md",
    download: "",
    contributors: [
        { name: "wyn price", role: "developer" },
        { name: "brownboiiwonder", role: "modeler" },
        { name: "neusfear", role: "various"},
        { name: "brotat", role: "texturer"},
        { name: "mazikeen", role: "texturer"},
        { name: "hyper", role: "animator"},
        { name: "gegy", role: "programmer"},
        { name: "sindavar", role: "modeler & Texturer"},
        { name: "lucca", role: "concept artist"},
        { name: "floofhips", role: "texturer"},
        { name: "loxures", role: "modeler"},
        { name: "thebradqq", role: "Modeler & Texturer"},
        { name: "MX", role: "animator"},
        { name: "rodentman87", role: "programmer"},
        { name: "omar_tuareg", role: "animator"},
        { name: "Mr.BizarreMegaloceros", role: "modeler"},
        { name: "fred", role: "texturer"},
        { name: "Nyfaria", role: "programmer"}

    ],
    image: "/images/project_nublar/squad.jpg",
    guides: [
        {name: "Mob Genetics", route: "mob-genetics"}
    ]
}

export const dumbLibraryInfo: ModInfoType = {
    route: "dumblibrary",
    name: "DumbLibrary",
    description: "A libary mod used in DumbCode's mods.",
    source: "https://github.com/Dumb-Code/DumbLibrary",
    wiki: "https://github.com/Dumb-Code/DumbLibrary/wiki",
    license: "https://github.com/Dumb-Code/DumbLibrary/blob/master/LICENSE.md",
    download: "https://www.curseforge.com/minecraft/mc-mods/dumb-library",
    contributors: [
        { name: "wyn price", role: "developer" },
        { name: "gegy", role: "contributor"}
    ],
    image: "/images/dumb_library.bmp",
    guides: []
}

export const gradleHookInfo: ModInfoType = {
    route: "gradlehook",
    name: "GradleHook",
    description: "GradleHook is a gradle plugin that adds a POST request as a gradle task.",
    source: "https://github.com/Dumb-Code/GradleHook",
    wiki: "https://github.com/Dumb-Code/GradleHook/blob/master/README.md",
    license: "https://github.com/Dumb-Code/GradleHook/blob/master/LICENSE",
    download: "",
    contributors: [
        { name: "wyn price", role: "developer" }
    ],
    image: "/images/gradle_hook.bmp",
    guides: []
}
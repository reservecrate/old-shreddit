interface ISidebarData {
    subredditInfo: string;
}

interface IPatchNotes {
    current: string;
    previous: string;
}

export let Subreddits: string[];
export let SidebarData: ISidebarData;
export let PatchNotes: IPatchNotes;
export let PostFlairs: string[];

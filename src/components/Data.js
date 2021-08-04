const url = 'https://www.reddit.com/r/apexlegends/new.json?sort=new';

const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};

getData();

let Subreddits = [
    'askreddit',
    'pics',
    'news',
    'gaming',
    'movies',
    'funny',
    'todayilearned',
    'explainlikeimfive',
    'worldnews',
    'iama',
    'tifu',
    'videos',
    'aww',
    'askscience',
    'twoxchromosomes',
    'music',
    'jokes',
    'lifeprotips',
    'showerthoughts'
];

let SidebarData = {
    subredditInfo:
        'the developer supported, community-run subreddit dedicated to Apex Legends made by Respawn Entertainment'
};

let PatchNotes = {
    current:
        'https://old.reddit.com/r/apexlegends/comments/o73hs0/apex_legends_genesis_collection_event_patch_notes/?utm_source=reddit&utm_medium=usertext&utm_name=apexlegends&utm_content=t5_rgzzt',
    previous: 'https://old.reddit.com/r/apexlegends/wiki/patchnotes'
};

let PostFlairs = [
    'Discussion',
    'Creative',
    'Gameplay',
    'Humor',
    'News',
    'Useful',
    'Esports',
    'Question',
    'Feedback',
    'Support',
    'Bug',
    'PS4',
    'X1',
    'PC',
    'Rumor/Unverified',
    'Giveaway',
    'Subreddit Meta',
    'Respawn Official',
    'Dev Reply inside!',
    'Patch Notes'
];

export { Subreddits, SidebarData, PatchNotes, PostFlairs };

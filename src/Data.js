let Posts = [
	{
		title: 'Kindness owns whatever',
		number: Math.floor(Math.random() * 24),
		hdwmy: 'hours',
		username: 'reservecrate',
		textContent: 'Up is opinion message manners correct hearing husband my. Disposing commanded dashwoods cordially depending at at. Its strangers who you certainty earnestly resources suffering she. Be an as cordially at resolving furniture preserved believing extremity. Easy mr pain felt in. Too northward affection additions nay. He no an nature ye talent houses wisdom vanity denied.'
	},
	{
		title: 'Outrageous furniture to there',
		number: Math.floor(Math.random() * 24),
		hdwmy: 'days',
		username: 'reservecrate',
		textContent: 'Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our.'
	},
	{
		title: 'Magic lions',
		number: Math.floor(Math.random() * 24),
		hdwmy: 'weeks',
		username: 'reservecrate',
		textContent: 'Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.'
	},
	{
		title: 'She offices for highest',
		number: Math.floor(Math.random() * 24),
		hdwmy: 'hours',
		username: 'reservecrate',
		textContent: 'Must you with him from him her were more. In eldest be it result should remark vanity square. Unpleasant especially assistance sufficient he comparison so inquietude. Branch one shy edward stairs turned has law wonder horses. Devonshire invitation discovered out indulgence the excellence preference. Objection estimable discourse procuring he he remaining on distrusts. Simplicity affronting inquietude for now sympathize age. She meant new their sex could defer child. An lose at quit to life do dull.'
	},
	{
		title: 'Trust the winds',
		number: Math.floor(Math.random() * 24),
		hdwmy: 'hours',
		username: 'reservecrate',
		textContent: 'Feet evil to hold long he open knew an no. Apartments occasional boisterous as solicitude to introduced. Or fifteen covered we enjoyed demesne is in prepare. In stimulated my everything it literature. Greatly explain attempt perhaps in feeling he. House men taste bed not drawn joy. Through enquire however do equally herself at. Greatly way old may you present improve. Wishing the feeling village him musical.'
	},
	{
		title: 'To sure calm much',
		number: Math.floor(Math.random() * 24),
		hdwmy: 'hours',
		username: 'reservecrate',
		textContent: 'Apartments simplicity or understood do it we. Song such eyes had and off. Removed winding ask explain delight out few behaved lasting. Letters old hastily ham sending not sex chamber because present. Oh is indeed twenty entire figure. Occasional diminution announcing new now literature terminated.'
	},
	{
		title: 'When the rains came',
		number: Math.floor(Math.random() * 24),
		hdwmy: 'days',
		username: 'reservecrate',
		textContent: 'Can curiosity may end shameless explained. True high on said mr on come. An do mr design at little myself wholly entire though. Attended of on stronger or mr pleasure. Rich four like real yet west get. Felicity in dwelling to drawings. His pleasure new steepest for reserved formerly disposed jennings.'
	},
	{
		title: 'At distant',
		number: Math.floor(Math.random() * 24),
		hdwmy: 'hours',
		username: 'reservecrate',
		textContent: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. Why kept very ever home mrs.'
	}
];

const url = 'https://www.reddit.com/r/apexlegends/new.json?sort=new';

const getData = async () => {
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
};

getData();

let Subreddits = ['askreddit', 'pics', 'news', 'gaming', 'movies', 'funny', 'todayilearned', 'explainlikeimfive', 'worldnews', 'iama', 'tifu', 'videos', 'aww', 'askscience', 'twoxchromosomes', 'music', 'jokes', 'lifeprotips', 'showerthoughts'];

let SidebarData = {
	subredditInfo: 'the developer supported, community-run subreddit dedicated to Apex Legends made by Respawn Entertainment'
};

let PatchNotes = {
	current: 'https://old.reddit.com/r/apexlegends/comments/o73hs0/apex_legends_genesis_collection_event_patch_notes/?utm_source=reddit&utm_medium=usertext&utm_name=apexlegends&utm_content=t5_rgzzt',
	previous: 'https://old.reddit.com/r/apexlegends/wiki/patchnotes'
};

let PostFlairs = ['Discussion', 'Creative', 'Gameplay', 'Humor', 'News', 'Useful', 'Esports', 'Question', 'Feedback', 'Support', 'Bug',
'PS4', 'X1', 'PC', 'Rumor/Unverified', 'Giveaway', 'Subreddit Meta', 'Respawn Official', 'Dev Reply inside!', 'Patch Notes'
];

export {Posts, Subreddits, SidebarData, PatchNotes, PostFlairs};
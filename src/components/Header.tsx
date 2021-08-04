import { Subreddits } from './Data.js';

export const Header = () => {
    const subredditLinkPrefix = 'https://old.reddit.com/r/';
    return (
        <div id='header'>
            <div id='header-left'>
                <a
                    className='header-left-items header-items'
                    href='https://old.reddit.com/mysubreddits'>
                    my subreddits
                </a>
                <a
                    className='header-left-items header-items'
                    href='https://old.reddit.com/r/popular/'>
                    popular
                </a>
                <a
                    className='header-left-items header-items'
                    href='https://old.reddit.com/r/all/'>
                    all
                </a>
                <a
                    className='header-left-items header-items'
                    href='https://old.reddit.com/r/random/'>
                    random
                </a>
                <a
                    className='header-left-items header-items'
                    href='https://old.reddit.com/users/'>
                    users
                </a>
            </div>
            <div id='subreddits-div'>
                {Subreddits.map(subreddit => {
                    return (
                        <a
                            key={new Date().getTime.toString()+Math.random()*1000}
                            className='subreddits header-items'
                            href={subredditLinkPrefix + subreddit}>
                            {subreddit}
                        </a>
                    );
                })}
            </div>
            <div id='header-right'>
                <a
                    href='https://old.reddit.com/subreddits/'
                    id='more'
                    className='header-items header-right-items'>
                    more
                </a>
            </div>
        </div>
    );
};

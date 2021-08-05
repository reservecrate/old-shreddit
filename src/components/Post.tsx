import { IPost } from '../praw/prawData';

export const Post: React.FC<IPost> = ({
    url,
    domain,
    title,
    author,
    age,
    textContent,
    imageUrl
}) => {
    const handleClick = () => {
        window.open(url, '_blank');
    };

    if (domain === 'self.apexlegends') {
        return (
            <div className='posts' onClick={handleClick}>
                <h4 id='post-title' className='post-elements'>
                    {title} <span id='post-domain'>{domain}</span>
                </h4>
                <p id='post-details' className='post-elements'>
                    submitted {age} ago by {author}
                </p>
                <p id='post-text-content' className='post-elements'>
                    {textContent}
                </p>
            </div>
        );
    } else if (domain === 'i.redd.it') {
        return (
            <div className='posts' onClick={handleClick}>
                <h4 id='post-title' className='post-elements'>
                    {title} <span id='post-domain'>{domain}</span>
                </h4>
                <p id='post-details' className='post-elements'>
                    submitted {age} ago by {author}
                </p>
                <img src={imageUrl} alt='post' />
            </div>
        );
    } else if (domain === 'v.redd.it') {
        return (
            <div className='posts' onClick={handleClick}>
                <h4 id='post-title' className='post-elements'>
                    {title} <span id='post-domain'>{domain}</span>
                </h4>
                <p id='post-details' className='post-elements'>
                    submitted {age} ago by {author}
                </p>
            </div>
        );
    } else {
        return (
            <div className='posts-error'>
                <h4>Error: cannot get post data</h4>
            </div>
        );
    }
};

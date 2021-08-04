import { IPost } from '../praw/prawData';

export const Post: React.FC<IPost> = ({
    url,
    domain,
    title,
    author,
    age,
    textContent,
    // linkUrl,
    imageUrl,
    // videoUrl
    handleClick
}) => {
    if (textContent) {
        return (
            <div className='posts' onClick={() => handleClick(url)}>
                <div id='title-and-domain-div' className='post-elements'>
                    <h4 id='post-title'>{title}</h4>
                    <p id='post-format'>
                        {domain}
                    </p>
                </div>
                <p id='post-details' className='post-elements'>
                    submitted {age} ago by {author}
                </p>
                <p id='post-text-content' className='post-elements'>
                    {textContent}
                </p>
            </div>
        );
    } /* else if (linkUrl) {
        return (
            <div className='posts'>
                <div id='title-format-div' className='post-elements'>
                    <a id='post-title' href={linkUrl}>
                        {title}
                    </a>
                    <p id='post-format'>
                        {type}.{subreddit}
                    </p>
                </div>
                <p id='post-details' className='post-elements'>
                    submitted {age} ago by {author}
                </p>
            </div>
        );
    } */ else if (imageUrl) {
        return (
            <div className='posts' onClick={() => handleClick(url)}>
                <div id='title-and-domain-div' className='post-elements'>
                    <h4 id='post-title'>{title}</h4>
                    <p id='post-format'>{domain}</p>
                </div>
                <p id='post-details' className='post-elements'>
                    submitted {age} ago by {author}
                </p>
                <img src={imageUrl} alt='post' />
            </div>
        );
    } /* else if (videoUrl) {
        return (
            <div className='posts'>
                <div id='title-format-div' className='post-elements'>
                    <h4 id='post-title'>{title}</h4>
                    <p id='post-format'>v.redd.it</p>
                </div>
                <p id='post-details' className='post-elements'>
                    submitted {age} ago by {author}
                </p>
                <iframe
                    src={videoUrl}
                    title={title}
                    width='auto'
                    height='auto'
                    autoplay
                    muted
                />
            </div>
        );
    } */
    else {
        return <div>
            <h4>Error</h4>
        </div>
    }
};

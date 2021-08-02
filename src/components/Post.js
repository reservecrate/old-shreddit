export const Post = ({ type, title, author, age, textContent, linkUrl, imageUrl, videoUrl }) => {
    console.log(
        type,
        title,
        author,
        age,
        textContent,
        linkUrl,
        imageUrl,
        videoUrl
    );
    return (
        <div className='posts'>
            <div id='title-format-div' className='post-elements'>
                <h4 id='post-title'>{title}</h4>
                <p id='post-format'>self.apexlegends</p>
            </div>
            <p id='post-details' className='post-elements'>
                submitted {age} ago by {author}
            </p>
            <p id='post-text-content' className='post-elements'>
                {textContent}
            </p>
        </div>
    );
};

Post.defaultProps = {
    title: 'Title',
    number: Math.floor(Math.random() * 24),
    hdwmy: 'hours',
    username: 'reservecrate',
    textContent: 'Placeholder',
};

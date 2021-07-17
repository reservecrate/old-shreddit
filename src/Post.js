import React from 'react';

const Post = ({ post }) => {
    const { title, number, hdwmy, username, textContent } = post;
    return (
        <div className='posts'>
            <h4 id='post-title' className='post-elements'>
                {title}
            </h4>
            <p id='post-details' className='post-elements'>
                submitted {number} {hdwmy} ago by {username}
            </p>
            <span className='post-format'>self.apexlegends</span>
            <p id='post-text-content' className='post-elements'>
                {textContent}
            </p>
            <button>delete</button>
        </div>
    );
};

export default Post;

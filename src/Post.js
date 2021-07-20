import React from 'react';

export const Post = ({ title, number, hdwmy, username, textContent }) => {
    return (
        <div className='posts'>
            <div id='title-format-div' className='post-elements'>
                <h4 id='post-title'>{title}</h4>
                <p id='post-format'>self.apexlegends</p>
            </div>
            <p id='post-details' className='post-elements'>
                submitted {number} {hdwmy} ago by {username}
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
    textContent: 'Did you ever hear the tragedy of Darth Plagueis the Wise?',
};

import React, { useState } from 'react';
import Post from './Post.js';
import { Posts } from './Data.js';

const Feed = () => {
    const [post, setPost] = useState({
        title: '',
        textContent: '',
        username: '',
    });
    const [postsArr, setPostsArr] = useState(Posts);
    const handleSubmit = e => {
        e.preventDefault();
        setPostsArr([...postsArr, post]);
        setPost({ title: '', textContent: '', username: '' });
    };
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setPost({
            ...post,
            [name]: value,
            hdwmy: 'hours',
            number: Math.floor(Math.random() * 10),
        });
    };
    return (
        <div id='feed'>
            {postsArr.map(post => {
                return (
                    <Post
                        key={
                            new Date().getTime().toString() +
                            Math.floor(Math.random() * 1000)
                        }
                        post={post}
                    />
                );
            })}
            <form id='submit-text-form' onSubmit={handleSubmit}>
                <textarea
                    required
                    id='title-input'
                    className='form-items'
                    name='title'
                    value={post.title}
                    placeholder='title'
                    rows='3'
                    cols='16'
                    onChange={handleChange}
                />
                <textarea
                    required
                    id='text-input'
                    className='form-items'
                    name='textContent'
                    value={post.textContent}
                    placeholder='text'
                    rows='10'
                    cols='16'
                    onChange={handleChange}
                />
                <input
                    required
                    type='text'
                    id='username-input'
                    className='form-items'
                    name='username'
                    value={post.username}
                    placeholder='username'
                    onChange={handleChange}
                />
                <button id='submit-button' className='submit-post-items'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Feed;

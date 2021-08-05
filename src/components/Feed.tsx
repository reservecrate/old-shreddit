import { Post } from './Post';
import { postsArr } from '../praw/prawData';

const Feed = () => { 
    return (
        <div id='feed'>
            {postsArr.map(postObj => {
                return (
                    <Post
                        key={
                            new Date().getTime().toString() +
                            Math.random() * 1000
                        }
                        {...postObj}
                    />
                );
            })}
        </div>
    );
};

export default Feed;

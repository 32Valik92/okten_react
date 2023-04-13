import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";

const Posts = ({showInfoPost}) => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts);
            });
    }, []);

    return (
        <div>
            {
                posts.map(value => <Post post={value} showInfoPost={showInfoPost} key={value.id}/>)
            }
        </div>
    );
};

export default Posts;
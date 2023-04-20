import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../service/postService";
import './Post.css';

const Post = () => {
    const [post, setPost] = useState([]);
    const {id} = useParams();

    // console.log('id = ' + id);
    // console.log(post[id-1]);

    useEffect(() => {
        postService.getAll().then(postData => setPost(postData.data))
    }, [id])

    // console.log(post);

    return (
        <div className={'post'}>
            {
                post.length > 0 && (
                    <div>
                        <h3>Your Post</h3>
                        <p>User ID - {post[id - 1].userId}</p>
                        <p>Id - {post[id - 1].id}</p>
                        <p>Title - {post[id - 1].title}</p>
                        <p>Body - {post[id - 1].body}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Post;
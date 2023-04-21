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
        postService.getById(id).then(postData => setPost(postData.data))
    }, [id])

    // console.log(post);

    return (
        <div className={'post'}>
            {
                post && (
                    <div>
                        <h3>Your Post</h3>
                        <p>User ID - {post.userId}</p>
                        <p>Id - {post.id}</p>
                        <p>Title - {post.title}</p>
                        <p>Body - {post.body}</p>

                    </div>
                )
            }
        </div>
    );
};

export default Post;
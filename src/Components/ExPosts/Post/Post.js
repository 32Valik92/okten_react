import React from 'react';
import './PostStyle.css'

const Post = ({post, showInfoPost}) => {
    return (
        <div className='Post'>
            <p>
                id - {post.id}<br/>
                title - {post.title}
            </p>

            <button onClick={() => {
                showInfoPost(post)
            }}>detail
            </button>

        </div>
    );
};

export default Post;
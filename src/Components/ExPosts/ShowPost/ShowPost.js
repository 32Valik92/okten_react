import React from 'react';

const ShowPost = ({chosenPost}) => {
    return (
        <div>
            <p>
                userId - {chosenPost.userId}<br/>
                id - {chosenPost.id}<br/>
                title - {chosenPost.title}<br/>
                body - {chosenPost.body}<br/>
            </p>
        </div>
    );
};

export default ShowPost;
import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            {comment.id}. {comment.name} <Link to={`${comment.postId}`}>[Show Post of Comment]</Link>
        </div>
    );
};

export default Comment;
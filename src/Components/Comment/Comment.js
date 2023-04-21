import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const navigate = useNavigate();

    return (
        <div>
            {comment.id}. {comment.name} <br/>
            <button onClick={() => navigate(`${comment.postId}`)}>Show Post of Comment</button>
        </div>
    );
};

export default Comment;
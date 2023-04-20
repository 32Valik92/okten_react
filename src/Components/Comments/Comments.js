import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {commentsService} from "../../service/commentsService";
import Comment from "../Comment/Comment";
import './Comments.css';

const Comments = () => {
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(ourData => setAllComments(ourData.data))
    }, [])

    // allComments && console.log(allComments);

    return (
        <div className={'comments'}>
            <h3>Comments Page</h3>
            <Outlet/>

            {allComments.map(comment => <Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export default Comments;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentService} from "../../../services";
import {commentActions} from "../../../redux";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const dispatch = useDispatch(); // Будемо класти коментарі у сховище
    const {comments} = useSelector(state => state.commentStore) // Дістаємо і користуємося

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => dispatch(commentActions.setComments(value)));
    }, [dispatch]);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};
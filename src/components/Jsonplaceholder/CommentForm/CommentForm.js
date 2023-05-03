import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {commentService} from "../../../services";
import {commentActions} from "../../../redux";

const CommentForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch(); // Будемо класти коментар до сховища

    const addComment = async (comment) => {
        const {data} = await commentService.createComment(comment);
        dispatch(commentActions.addComment(data))
        console.log('addComment:\n', data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(addComment)}>
            <input placeholder={'name'} {...register('name')}/>
            <input placeholder={'email'} {...register('email')}/>
            <input placeholder={'body'} {...register('body')}/>
            <button>Add comment</button>
        </form>
    );
};

export {CommentForm};
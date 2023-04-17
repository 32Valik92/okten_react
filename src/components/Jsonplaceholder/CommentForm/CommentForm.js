import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../../services/user.service";

const CommentForm = () => {
    const {register, handleSubmit, reset} = useForm();

    const addComment = async (comment) => {
        const {data} = await userService.createComment(comment);
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

export default CommentForm;
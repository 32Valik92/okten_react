import React from 'react';

import {CommentForm, Comments} from "../components";

const CommentPage = () => {
    return (
        <div>
            <CommentForm/>
            <hr/>
            <Comments/>
        </div>
    );
};

export {CommentPage};
import React from 'react';

import {UserForm, Users} from "../components";

const UserPage = () => {
    return (
        <div>
            <UserForm/>
            <hr/>
            <Users/>
        </div>
    );
};

export {UserPage};
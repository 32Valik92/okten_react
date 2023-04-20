import React from 'react';
import {Link, Route, Routes} from "react-router-dom";

import Todos from "../Components/Todos/Todos";
import Albums from "../Components/Albums/Albums";
import Comments from "../Components/Comments/Comments";
import Post from "../Components/Post/Post";
import './Routing.css'

const Routing = () => {
    return (
        <div>
            <div className={'menu'}>
                <div><Link to={'/todos'}>About todos</Link></div>
                <div><Link to={'/albums'}>About albums</Link></div>
                <div><Link to={'/comments'}>About comments</Link></div>
            </div>
            <div>
                <Routes>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={':id'} element={<Post/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
};

export default Routing;
import React from 'react';
import './ObjectStyle.css'


const ObjectSpaceX = ({objectSpaceX}) => {
    let {mission_name, launch_year, links: {mission_patch}} = objectSpaceX
    return (
        <div className='ObjectSpaceX'>
            <p>
                mission_name - {mission_name}<br/>
                launch_year - {launch_year}<br/>
            </p>
            <img src={mission_patch}/>
        </div>
    );
};

export default ObjectSpaceX;
import React from 'react';
import '../../../App.css'


const ObjectSpaceX = ({objectSpaceX}) => {
    let {mission_name, launch_year, links: {mission_patch}} = objectSpaceX
    return (
        <div className='ObjectSpaceX'>
            <p>
                mission_name - {mission_name}<br/>
                launch_year - {launch_year}<br/>
                mission_patch - {mission_patch}<br/>
            </p>
        </div>
    );
};

export default ObjectSpaceX;
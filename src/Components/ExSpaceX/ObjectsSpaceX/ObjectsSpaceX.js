import React, {useEffect, useState} from 'react';
import ObjectSpaceX from "../ObjectSpaceX/ObjectSpaceX";

const ObjectsSpaceX = () => {
    let [objectsSpaceX, setObjectsSpaceX] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(data => {
                setObjectsSpaceX(data);
            });
    }, []);

    return (
        <div>
            {
                objectsSpaceX.filter(object => object.launch_year !== '2020').map((objectSpaceX, index) => <ObjectSpaceX
                    objectSpaceX={objectSpaceX} key={index + 1}/>)
            }
        </div>
    );
};

export default ObjectsSpaceX;
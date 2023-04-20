import React from 'react';

const Album = ({album}) => {
    return (
        <div>
            {album.id}. {album.title}
        </div>
    );
};

export default Album;
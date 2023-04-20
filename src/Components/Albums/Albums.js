import React, {useEffect, useState} from 'react';

import {albumsService} from "../../service/albumsService";
import Album from "../Album/Album";
import './Albums.css';

const Albums = () => {
    const [allAlbums, setAllAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(ourData => setAllAlbums(ourData.data))
    }, [])

    // console.log(allAlbums);

    return (
        <div className={'albums'}>
            <h3>Albums Page</h3>

            {allAlbums.map(album => <Album key={album.id} album={album}/>)}

        </div>
    );
};

export default Albums;
import React from 'react'
import "./SongRow.css";

const SongRow = ({track="test"}) => {
    return (
        <div className= "SongRow">
            <img className= "songrow__album"src={track.album.images[0].url} alt="" />
            <div className="songrow__info">
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist)=> artist.name).join(",")}
                {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow

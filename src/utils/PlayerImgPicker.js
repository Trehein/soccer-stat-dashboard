import React from 'react'

const PlayerImgPicker = ({ player }) => {
    const imgPath = process.env.PUBLIC_URL + `/eplPlayers/${player.name}.png`

    return (
        <img 
            src={imgPath} 
            alt={player.name} 
        />
    )
}

export default PlayerImgPicker
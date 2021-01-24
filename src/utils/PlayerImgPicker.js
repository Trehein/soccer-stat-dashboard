import React from 'react'
// import harryKane from '../images/eplPlayers/Harry Kane.png'


// function playerImgBinder (name) {
//     const nameFormat = name.replace(/\s/g, '')
//     const lowerCased = nameFormat.charAt(0).toLowerCase() + nameFormat.slice(1)
//     return(lowerCased)
// }

const PlayerImgPicker = ({ player }) => {
    // const imgSrc = playerImgBinder(player.name)
    const imgPath = process.env.PUBLIC_URL + `/eplPlayers/${player.name}.png`
    console.log(imgPath)


    return (
        <img src={imgPath} alt="" 
            width="20px"
            height="20px"
        />
    )
}

export default PlayerImgPicker
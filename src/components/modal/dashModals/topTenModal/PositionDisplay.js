import React from 'react'

function posSwitch (player) {
    switch (player.position) {
        case "FWD":
            return ( "Forward" )
        case "MID":
            return ( "Midfielder" )
        case "DEF":
            return ( "Defender" )
        case "GKP":
            return ( "Goalkeeper" )
        default:
            return ( "" )
    }
}

const PositionDisplay = ({ player }) => {
    return (
        <div className="positionDisplayBox">
            <button className={player.position}>
                {posSwitch(player)}
            </button>
        </div>
    )
}

export default PositionDisplay
import React from 'react'

const PositionDisplay = ({ player }) => {
    return (
        <div className="positionDisplayBox">
            <button className={player.position}>
                {player.position}
            </button>
        </div>
    )
}

export default PositionDisplay
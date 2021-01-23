import React from 'react'

const TopTenPlayerDisplay = ({player}) => {
    return (
        <div className="playerDisplayContainer" >
            {player.name}
        </div>
    )
}

export default TopTenPlayerDisplay
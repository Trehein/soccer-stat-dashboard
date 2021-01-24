import React from 'react'
import PlayerImgPicker from '../../../../utils/PlayerImgPicker'

const TopTenPlayerDisplay = ({player}) => {
    return (
        <div className="playerDisplayContainer" >
            <PlayerImgPicker player={player} />
        </div>
    )
}

export default TopTenPlayerDisplay
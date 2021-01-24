import React from 'react'
import PlayerImgPicker from '../../../../utils/PlayerImgPicker'
import PositionDisplay from './PositionDisplay'

const TopTenPlayerDisplay = ({player}) => {
    return (
        <div className="playerDisplayContainer" >
            <div className="playerDisplayImgContainer">
                <PlayerImgPicker player={player} />
            </div>
            <div className="playerDisplayStatContainer">
                <div className="playerDisplayHeader">
                    <h2>{player.name}</h2>
                </div>
                <PositionDisplay player={player} />
            </div>
        </div>
    )
}

export default TopTenPlayerDisplay
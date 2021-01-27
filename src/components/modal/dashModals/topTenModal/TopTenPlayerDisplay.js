import React from 'react'
import PlayerImgPicker from '../../../../utils/PlayerImgPicker'
import PositionDisplay from './PositionDisplay'
import ClubDisplay from './ClubDisplay'
// import DisplayStatContainer from './DisplayStatContainer'
import DisplayStatContainer from './altTable/DisplayStatContainer'

const TopTenPlayerDisplay = ({player}) => {
    return (
        <div className="playerDisplayContainer" >
            <div className="playerDisplayImgContainer">
                <PlayerImgPicker player={player} />
            </div>
            <div className="playerDisplayStatContainer">
                <div className="fullRow">
                    <h2>{player.name}</h2>
                </div>
                <div className="fullRow">
                    <ClubDisplay player={player} />
                    <PositionDisplay player={player} />
                </div>
                <div className="displayStatTable">
                    <DisplayStatContainer player={player} />
                </div>
            </div>
        </div>
    )
}

export default TopTenPlayerDisplay
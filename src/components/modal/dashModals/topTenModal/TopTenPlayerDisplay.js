import React from 'react'
import PlayerImgPicker from '../../../../utils/PlayerImgPicker'
import ClubLogoPicker from '../../../../utils/ClubLogoPicker'


const TopTenPlayerDisplay = ({player}) => {
    return (
        <div className="playerDisplayContainer" >
            <div className="playerDisplayImgContainer">
                <PlayerImgPicker player={player} />
            </div>
            <div className="playerDisplayStatContainer">
                <div className="playerDisplayHeader">
                    <ClubLogoPicker player={player} />
                </div>
            </div>
        </div>
    )
}

export default TopTenPlayerDisplay
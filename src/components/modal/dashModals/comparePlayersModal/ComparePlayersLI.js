import React from 'react'
import ClubLogoPicker from '../../../../utils/ClubLogoPicker'

const ComparePlayersLI = ({ player, index }) => {
    console.log(index)
    return (
        <li className="playerListRow">
            <div className="nameBox">
                <ClubLogoPicker player={player} />
                <div className="playerName">
                    <h5>
                        {player.name}
                    </h5>
                </div>
            </div>
            <div className="statCheckContainer">
                <div className="statBox" >
                    <h5>
                        {player.totalPTS}
                    </h5>
                </div>
            </div>
        </li>
    )
}

export default ComparePlayersLI
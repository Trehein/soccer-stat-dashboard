import React from 'react'
import ClubLogoPicker from '../../../../utils/ClubLogoPicker'

const TopTenListItem = ({ player, setDisplayPlayer }) => {
    function handlePlayerSet () {
        setDisplayPlayer(player)
    }

    return (
        <li className="topTenListRow" onClick={ handlePlayerSet }>
            <div className="halfBox">
                <ClubLogoPicker player={player} />
                <div className="topTenListName">
                    <h5>
                        {player.name}
                    </h5>
                </div>
            </div>
            <div className="topTenListStatContainer">
                <div className="topTenStatBox">
                    <h5>
                        {player.totalPTS}
                    </h5>
                </div>
                <div className="topTenStatBox">
                    <h5>
                        {player.totalGS}
                    </h5>
                </div>
                <div className="topTenStatBox">
                    <h5>
                        {player.totalA}
                    </h5>
                </div>
            </div>
        </li>
    )
}

export default TopTenListItem
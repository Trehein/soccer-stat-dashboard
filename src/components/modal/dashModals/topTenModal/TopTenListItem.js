import React from 'react'
import ClubLogoPicker from '../../../../utils/ClubLogoPicker'

const TopTenListItem = ({player}) => {
    return (
        <li className="topTenListRow">
            <ClubLogoPicker player={player} />
            <div className="topTenListName">
                <h5>
                    {player.name}
                </h5>
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
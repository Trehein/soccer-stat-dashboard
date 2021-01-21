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
        </li>
    )
}

export default TopTenListItem
import React from 'react'
import TopTenListItem from './TopTenListItem'

const TopTenList = ({ topTen }) => {
    return (
        <div className="topTenListContainer">
            <h3 className="topTenHeader">Player</h3>
            <ul>
                { topTen.map(player => {
                    return (
                        <TopTenListItem player={player} key={player.name}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default TopTenList
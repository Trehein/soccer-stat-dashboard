import React, { useState } from 'react'
import allPlayerStats from '../../../../datasets/allPlayersStats.json'
import TopTenList from './TopTenList'
import TopTenPlayerDisplay from './TopTenPlayerDisplay'

function sortPlayers (allPlayerStats) {
    return (
        allPlayerStats.sort((a, b) => { return a.totalPts < b.totalPts ? -1 : 1; }).slice(0, 10)
    )
}

const TopTenContent = () => {
    const topTen = sortPlayers(allPlayerStats)
    const [displayPlayer, setDisplayPlayer] = useState(sortPlayers(allPlayerStats)[0])

    // console.log(sortPlayers(allPlayerStats)[0])

    return (
        <>
            <div className="modalContentContainer">
                <TopTenList topTen={topTen} setDisplayPlayer={setDisplayPlayer} />
                <TopTenPlayerDisplay player={displayPlayer} />
            </div>
        </>
    )
}

export default TopTenContent
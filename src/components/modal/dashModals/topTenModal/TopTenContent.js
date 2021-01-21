import React from 'react'
import allPlayerStats from '../../../../datasets/allPlayersStats.json'
import TopTenList from './TopTenList'

const topTen = allPlayerStats.sort((a, b) => { return b.totalPts < a.totalPts ? 1 : -1; }).slice(0, 10)

const TopTenContent = () => {
    return (
        <>
            <div className="modalContentContainer">
                <TopTenList topTen={topTen} />
            </div>
        </>
    )
}

export default TopTenContent
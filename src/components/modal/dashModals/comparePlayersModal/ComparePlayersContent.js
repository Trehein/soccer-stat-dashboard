import React from 'react'
import allPlayerStats from '../../../../datasets/allPlayersStats.json'
import TopTenCompareLineChart from '../../../charts/TopTenCompareLineChart'

function sortPlayers (allPlayerStats) {
    return (
        allPlayerStats.sort((a, b) => { return a.totalPts < b.totalPts ? -1 : 1; }).slice(0, 10)
    )
}

const ComparePlayersContent = () => {
    const topTen = sortPlayers(allPlayerStats)
    // const [displayPlayer, setDisplayPlayer] = useState(sortPlayers(allPlayerStats)[0])

    return (
        <div>
            <TopTenCompareLineChart players={topTen} />
        </div>
    )
}

export default ComparePlayersContent
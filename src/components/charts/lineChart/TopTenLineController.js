import React from 'react'
import allPlayerStats from '../../../datasets/allPlayersStats.json'
import TopTenCompareLineChart from './TopTenCompareLineChart'
import * as d3 from 'd3'


function sortPlayers (allPlayerStats) {
    return (
        allPlayerStats.sort((a, b) => { return a.totalPts < b.totalPts ? -1 : 1; }).slice(0, 10)
    )
}

function calcPtsExtent (topTen) {
    const extent = [0, 0]

    topTen.map(player => {
        let playerExt = d3.extent(player.matches, ptsAccessor)

        if (extent[0] > playerExt[0]) {
            extent[0] = playerExt[0]
        } else if (playerExt[1] > extent[1]) {
            extent[1] = playerExt[1]
        }
    })

    return (
        extent
    )
}

const ptsAccessor = d => d.pts
const matchAccessor = d => d.match

const TopTenLineController = () => {
    const topTen = sortPlayers(allPlayerStats)
    const ptsExtent = calcPtsExtent(topTen)

    return (
        <TopTenCompareLineChart 
            players={topTen}
            ptsExtent={ptsExtent} 
            xAccessor={matchAccessor}
            yAccessor={ptsAccessor}
            label="Top Ten Players"
        />
    )
}

export default TopTenLineController
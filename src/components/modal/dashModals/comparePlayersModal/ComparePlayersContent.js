import React from 'react'
import allPlayerStats from '../../../../datasets/allPlayersStats.json'
import { extent, min, max } from 'd3'
import TopTenCompareLineChart from '../../../charts/TopTenCompareLineChart'

function sortPlayers (allPlayerStats) {
    return (
        allPlayerStats.sort((a, b) => { return a.totalPts < b.totalPts ? -1 : 1; }).slice(0, 10)
    )
}

function calcPtsExtent (topTen) {
    const ptsExtent = [0, 0]

    topTen.map(player => {
        let playerExt = extent(player.matches, ptsAccessor)
        if (ptsExtent[0] > playerExt[0]) {
            ptsExtent[0] = playerExt[0]
        } else if (playerExt[1] > ptsExtent[1]) {
            ptsExtent[1] = playerExt[1]
        }
    })

    return (
        ptsExtent
    )
}

const ptsAccessor = d => d.pts

const ComparePlayersContent = () => {
    const topTen = sortPlayers(allPlayerStats)
    const ptsExtent = calcPtsExtent(topTen)

    return (
        <TopTenCompareLineChart players={topTen} ptsExtent={ptsExtent} />
    )
}

export default ComparePlayersContent
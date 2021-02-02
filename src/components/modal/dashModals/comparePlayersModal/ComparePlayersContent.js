import React from 'react'
import allPlayerStats from '../../../../datasets/allPlayersStats.json'
import { extent } from 'd3'
import TopTenCompareLineChart from '../../../charts/TopTenCompareLineChart'
import './ComparePlayers.css'
import ComparePlayersList from './ComparePlayersList'

function sortPlayers (allPlayerStats) {
    return (
        allPlayerStats.sort((a, b) => { return a.totalPts < b.totalPts ? -1 : 1; }).slice(0, 10)
    )
}

const ptsAccessor = d => d.pts

function calcPtsExtent (topTen) {
    const ptsExtent = [0, 0]
    topTen.map(player => {
        let playerExt = extent(player.matches, ptsAccessor)
        if (ptsExtent[0] > playerExt[0]) {
            ptsExtent[0] = playerExt[0]
        } else if (playerExt[1] > ptsExtent[1]) {
            ptsExtent[1] = playerExt[1]
        }
        return null
    })
    return (
        ptsExtent
    )
}

const ComparePlayersContent = () => {
    const topTen = sortPlayers(allPlayerStats)
    const ptsExtent = calcPtsExtent(topTen)

    return (
        <div className="modalContentContainer">
            <div className="compareModalInner">
                <ComparePlayersList players={topTen} />
                <TopTenCompareLineChart players={topTen} ptsExtent={ptsExtent} />
            </div>
        </div>
    )
}

export default ComparePlayersContent
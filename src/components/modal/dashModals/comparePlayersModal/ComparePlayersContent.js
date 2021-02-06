import React, { useState } from 'react'
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
    const [onPlayers, setOnPlayers] = useState([true, false, false, true, false, false, false, false, false, false])
    const colors = ["rgba(63,81,181,1)", "rgba(233,30,99,1)", "rgba(76,175,80,1)", "rgba(255,87,34,1)", "rgba(0,188,212,1)", "rgba(255,193,7,1)", "rgba(103,58,183,1)", "rgba(205,220,57,1)", "rgba(33,150,243,1)", "rgba(33,33,33 ,1)"]
    const topTen = sortPlayers(allPlayerStats)
    const ptsExtent = calcPtsExtent(topTen)
    // console.log(onPlayers)

    return (
        <div className="modalContentContainer">
            <div className="compareModalInner">
                <ComparePlayersList players={topTen} onPlayers={onPlayers} setOnPlayers={setOnPlayers} colors={colors} />
                <TopTenCompareLineChart players={topTen} onPlayers={onPlayers} ptsExtent={ptsExtent} colors={colors} />
            </div>
        </div>
    )
}

export default ComparePlayersContent
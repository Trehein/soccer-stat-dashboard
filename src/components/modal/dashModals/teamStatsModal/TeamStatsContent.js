import React from 'react'
import "./TeamStatsModal.css"
// import ModalTeamBarChart from '../../../charts/barChart/ModalTeamBarChart'
import ModalTeamPieChart from '../../../charts/pieChart/ModalTeamPieChart'
import teamStatsModalPie from '../../../../datasets/teamStatsModalPie.json'



function calcPosTotals (fwds, mids, defs, gkps) {
    let fwdTotal = 0
    let midTotal = 0
    let defTotal = 0
    let gkpTotal = 0
    let totals = [
        { pos: "fwd", pts: 0, color: "red" },
        { pos: "mid", pts: 0, color: "green" },
        { pos: "def", pts: 0, color: "blue" },
        { pos: "gkp", pts: 0, color: "yellow" }
    ]
    
    fwds.map(player => {
        return fwdTotal = fwdTotal + player.atk.g
    })

    mids.map(player => {
        return midTotal = midTotal + player.atk.g
    })

    defs.map(player => {
        return defTotal = defTotal + player.atk.g
    })

    gkps.map(player => {
        return gkpTotal = gkpTotal + player.atk.g
    })

    totals[0].pts = fwdTotal
    totals[1].pts = midTotal
    totals[2].pts = defTotal
    totals[3].pts = gkpTotal

    return totals
}

const TeamStatsContent = () => {
    const onTeam ="LIV"
    const filteredPlayers = teamStatsModalPie.filter(player => player.club === onTeam)
    const fwds = filteredPlayers.filter(player => player.position === "FWD")
    const mids = filteredPlayers.filter(player => player.position === "MID")
    const defs = filteredPlayers.filter(player => player.position === "DEF")
    const gkps = filteredPlayers.filter(player => player.position === "GKP")
    // const onStat = "g"
    const posTotals = calcPosTotals(fwds, mids, defs, gkps)

    // console.log(posTotals)

    return (
        <div className="modalContentContainer">
            <div className="teamStatsModalInner">
                <div className="donutContainer">
                    <div className="pieChartHeader">
                        <h2>Liverpool</h2>
                    </div>
                    <ModalTeamPieChart allPlayers={filteredPlayers} posTotals={posTotals} />
                </div>
            </div>
        </div>
    )
}

export default TeamStatsContent
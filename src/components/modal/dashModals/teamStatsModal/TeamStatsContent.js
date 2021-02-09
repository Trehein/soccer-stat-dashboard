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
    let totals = { fwd: 0, mid: 0, def: 0, gkp: 0 }

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

    totals.fwd = fwdTotal
    totals.mid = midTotal
    totals.def = defTotal
    totals.gkp = gkpTotal

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

    console.log(posTotals)

    return (
        <div className="modalContentContainer">
            <div className="teamStatsModalInner">
                <ModalTeamPieChart />
            </div>
        </div>
    )
}

export default TeamStatsContent
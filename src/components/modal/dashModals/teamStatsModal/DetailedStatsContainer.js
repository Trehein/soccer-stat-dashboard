import React from 'react'
import PlayerList from './PlayerList'

const DetailedStatsContainer = (props) => {
    const players = props.allPlayers
    const sortedPlayers = sortPlayers(players)
    const onSlice = props.onSlice

    function sortPlayers (players) {
        return (
            players.sort((a, b) => { return a.atk.g > b.atk.g ? -1 : 1; }).slice(0,players.length)
        )
    }

    return (
        <div className="statsContainer">
            <PlayerList players={sortedPlayers} onSlice={onSlice} />
        </div>
    )
}

export default DetailedStatsContainer
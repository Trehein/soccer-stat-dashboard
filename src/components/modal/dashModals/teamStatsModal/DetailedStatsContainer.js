import React, { useState } from 'react'
import PlayerList from './PlayerList'

const DetailedStatsContainer = (props) => {
    const players = props.allPlayers
    const sortedPlayers = sortPlayers(players)

    const [onSwitch, setOnSwitch] = useState({
        "def": false,
        "mid": false,
        "fwd": false,
        "onPlayer": null
    })

    setOnSwitch()

    function setSelection (onProp) {
        if (onProp.pos) {
            return onProp
        } else {
            setOnSwitch({
                ...props,
                onPlayer: onProp.name
            })
        }
    }

    console.log(onSwitch)

    function sortPlayers (players) {
        return (
            players.sort((a, b) => { return a.atk.g > b.atk.g ? -1 : 1; }).slice(0,players.length)
        )
    }

    return (
        <div className="statsContainer">
            <PlayerList players={sortedPlayers} />
        </div>
    )
}

export default DetailedStatsContainer
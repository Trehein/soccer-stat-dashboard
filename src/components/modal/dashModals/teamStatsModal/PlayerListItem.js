import React from 'react'
import { motion } from 'framer-motion'

const PlayerListItem = ({ player }) => {
    function playerPositionSwitch (pos) {
        switch(pos) {
            case "GKP": 
                return (
                    <div>GKP</div>
                )
            case "DEF": 
                return (
                    <div>DEF</div>
                )
            case "MID": 
                return (
                    <div>MID</div>
                )
            case "FWD": 
                return (
                    <div>FWD</div>
                )
            default:
                <></>
        }
    }

    return (
        <motion.li className="playerListRow"
            whileHover={{ scale: 1.05 }}
        >
            <div className="halfBox">
                <div className="liName">
                    <h5>
                        {player.name}
                    </h5>
                </div>
            </div>
            <div className="halfBox">
                <div className="halfStatBox">
                    { playerPositionSwitch(player.position) }
                </div>
                <div className="halfStatBox">
                    <h5>
                        { player.atk.g }
                    </h5>
                </div>
            </div>
        </motion.li>
    )
}

export default PlayerListItem
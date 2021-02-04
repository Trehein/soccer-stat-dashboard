import { motion } from 'framer-motion'
import React from 'react'
import ComparePlayersLI from './ComparePlayersLI'

const ComparePlayersList = ({ players, onPlayers, setOnPlayers }) => {
    return (
        <div className="comparePlayersListContainer">
            <div className="compareListHeader">
                <div className="headerPlayerContainer">
                    <h3>
                        Player
                    </h3>
                </div>
                <div className="headerStatContainer">
                    <div className="titleContainer">
                        <div className="h3Underline">
                            <h3>
                                PTS
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                { players.map((player, index) => {
                    return (
                        <motion.div className="comparePlayerLIContainer" key={index}
                            cursor="pointer"
                            whileHover={{ scale: 1.05, boxShadow:"0px 0px 8px rgb(0,0,0)" }}    
                        >
                            <ComparePlayersLI player={player} onPlayers={onPlayers} setOnPlayers={setOnPlayers} index={index} />
                        </motion.div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ComparePlayersList
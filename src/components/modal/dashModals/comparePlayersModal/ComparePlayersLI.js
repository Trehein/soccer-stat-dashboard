import React from 'react'
import ClubLogoPicker from '../../../../utils/ClubLogoPicker'
import { motion } from 'framer-motion'

const variants = {
    open: { opacity: 1, x: 0, transition: {duration: .75} },
    closed: { opacity: 0, x: 30, transition: {duration: .75} }
}

const ComparePlayersLI = ({ player, onPlayers, setOnPlayers, index, color }) => {
    console.log(color)

    function handlePlayerSet () {
        let items = [...onPlayers]
        let item = items[index]
        function itemSwitch (item) {
            return (
                item ? item = false : item = true
            )
        }
        items[index] = itemSwitch(item);
        setOnPlayers(items)
    }

return (
        <li className="playerListRow" onClick={ handlePlayerSet }>
            <div className="nameBox">
                <ClubLogoPicker player={player} />
                <div className="playerName">
                    <h5>
                        {player.name}
                    </h5>
                </div>
            </div>
            <div className="statCheckContainer">
                <div className="statBox" >
                    <h5>
                        {player.totalPTS}
                    </h5>
                    <motion.div 
                        className="colorBox" 
                        style={{background: `${color}`}} 
                        opacity="0"
                        variants={variants} 
                        initial="closed"
                        animate={ onPlayers[index] ? "open" : "closed" } 
                    />
                </div>
            </div>
        </li>
    )
}

export default ComparePlayersLI
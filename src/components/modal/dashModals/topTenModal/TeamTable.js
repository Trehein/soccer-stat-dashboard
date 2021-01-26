import React from 'react'
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi'

const TeamTable = ({ player, teamTable, setAtkTable, setDefTable, setTeamTable }) => {
    function nextTable () {
        setTeamTable(false)
        setDefTable(true)
    }

    function prevTable () {
        setAtkTable(true)
        setTeamTable(false)
    }

    return (
        <li>
            { teamTable && (
                <motion.div layoutId="onTable">
                    <p>TeamTable</p>
                    <div onClick={ prevTable } className="changeTableButton">
                        <IconContext.Provider value={{ size: '1.5em', style: { verticalAlign: 'middle' }}}>
                            <BiLeftArrowCircle />
                        </IconContext.Provider>
                    </div>
                    <div onClick={ nextTable } className="changeTableButton">
                        <IconContext.Provider value={{ size: '1.5em', style: { verticalAlign: 'middle' }}}>
                            <BiRightArrowCircle />
                        </IconContext.Provider>
                    </div>
                </motion.div>
            )}
        </li>
    )
}

export default TeamTable
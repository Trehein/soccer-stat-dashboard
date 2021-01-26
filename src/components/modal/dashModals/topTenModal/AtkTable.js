import React from 'react'
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'
import { BiRightArrowCircle } from 'react-icons/bi'


const AtkTable = ({ player, setTeamTable, atkTable, setAtkTable }) => {
    function nextTable () {
        setAtkTable(false)
        setTeamTable(true)
    }

    console.log(atkTable)

    return (
        <li>
            { atkTable && (
                <motion.div layoutId="onTable">
                    <p>AtkTable</p>
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

export default AtkTable
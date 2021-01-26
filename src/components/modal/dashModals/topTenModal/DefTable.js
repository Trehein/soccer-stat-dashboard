import React from 'react'
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi'

const DefTable = ({ player, defTable, setTeamTable, setDefTable, setDiscTable }) => {
    function nextTable () {
        setDefTable(false)
        setDiscTable(true)
    }

    function prevTable () {
        setDefTable(false)
        setTeamTable(true)
    }

    return (
        <li>
            { defTable && (
                <motion.div layoutId="onTable">
                    <p>DefTable</p>
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

export default DefTable
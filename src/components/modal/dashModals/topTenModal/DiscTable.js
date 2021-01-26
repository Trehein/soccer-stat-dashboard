import React from 'react'
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'
import { BiLeftArrowCircle } from 'react-icons/bi'

const DiscTable = ({ player, discTable, setDefTable, setDiscTable }) => {

    function prevTable () {
        setDiscTable(false)
        setDefTable(true)
    }

    return (
        <li>
            { discTable && (
                <motion.div layoutId="onTable">
                    <p>DiscTable</p>
                    <div onClick={ prevTable } className="changeTableButton">
                        <IconContext.Provider value={{ size: '1.5em', style: { verticalAlign: 'middle' }}}>
                            <BiLeftArrowCircle />
                        </IconContext.Provider>
                    </div>
                </motion.div>
            )}
        </li>
    )
}

export default DiscTable
import React from 'react'
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'
import { BiRightArrowCircle } from 'react-icons/bi'
import { statTableVariants } from '../../../motionVariants/statTableVariants'


const AtkTable = ({ player, setTeamTable, atkTable, setAtkTable }) => {
    function nextTable () {
        setAtkTable(false)
        setTeamTable(true)
    }

    if(player.position === "GKP") {
        return (
            <li>
                { atkTable && (
                    <motion.div layoutId="onTable"
                    
                    >
                        <div className="tableHeaderRow">
                            <h4>Goalkeeping</h4>
                            <div className="changeTableButtonContainer">
                                <div onClick={ nextTable } className="changeTableButton">
                                    <IconContext.Provider value={{ size: '1.5em', style: { verticalAlign: 'middle' }}}>
                                        <BiRightArrowCircle />
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </li>
        )
    } else {
        return (
            <li>
                { atkTable && (
                    <motion.div layoutId="onTable"
                        variants={statTableVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="tableHeaderRow">
                            <h4>Attacking</h4>
                            <div className="changeTableButtonContainer">
                                <div onClick={ nextTable } className="changeTableButton">
                                    <IconContext.Provider value={{ size: '1.5em', style: { verticalAlign: 'middle' }}}>
                                        <BiRightArrowCircle />
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </li>
        )
    }
}

export default AtkTable
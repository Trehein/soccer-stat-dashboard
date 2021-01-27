import React from 'react'
// import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi'
// import { statTableVariants } from '../../../motionVariants/statTableVariants'

const AtkTable = ({ player, setAtkTable, setTeamTable, setDiscTable }) => {
    function nextTable () {
        setAtkTable(false)
        setTeamTable(true)
    }

    function prevTable () {
        setAtkTable(false)
        setDiscTable(true)
    }

    return (
        <div>
            { player.position === "GKP" && (
                <div className="tableHeaderRow">
                    <h4>Goalkeeping</h4>
                    <div className="changeTableButtonContainer">
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
                    </div>
                </div>
            )}
            { player.position !== "GKP" && (
                <div className="tableHeaderRow">
                    <h4>Attacking</h4>
                    <div className="changeTableButtonContainer">
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
                    </div>
                </div>
            )}
        </div>
    )
}

export default AtkTable
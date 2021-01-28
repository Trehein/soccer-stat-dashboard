import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AtkTable from './AtkTable'
import TeamTable from './TeamTable'
import DefTable from './DefTable'
import DiscTable from './DiscTable'

const tableVariants = {
    hidden: {
        opacity: 0,
        y: 75,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            duration: .75,
            type: 'spring'
        }
    },
    exit: {
        opacity: 0,
        y: 75,
        transition: {
            duration: .75,
            type: 'spring'
        }
    }
}

const DisplayStatContainer = ({player}) => {
    const [atkTable, setAtkTable] = useState(true);
    const [teamTable, setTeamTable] = useState(false);
    const [defTable, setDefTable] = useState(false);
    const [discTable, setDiscTable] = useState(false);

    return (
        <div>
            <div className="tableHeaderRow">
                <div onClick={() => { setDiscTable(false); setTeamTable(false); setDefTable(false); setAtkTable(true) }} className="tableTab">
                    { player.position === "GKP" && (
                        <h4>GKP</h4>
                    )}
                    { player.position !== "GKP" && (
                        <h4>ATK</h4>
                    )}
                </div>
                <div onClick={() => { setDiscTable(false); setDefTable(false); setAtkTable(false); setTeamTable(true) }} className="tableTab">
                    <h4>TEAM</h4>
                </div>
                <div onClick={() => { setDiscTable(false); setAtkTable(false); setTeamTable(false); setDefTable(true) }} className="tableTab">
                    <h4>DEF</h4>
                </div>
                <div onClick={() => { setAtkTable(false); setTeamTable(false); setDefTable(false); setDiscTable(true) }} className="tableTab">
                    <h4>DISC</h4>
                </div>
            </div>
            <AnimatePresence exitBeforeEnter>
                { atkTable && (
                    <motion.div
                        variants={tableVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <AtkTable player={player} />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                { teamTable && (
                    <motion.div
                        variants={tableVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <TeamTable player={player} />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                { defTable && (
                    <motion.div
                        variants={tableVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <DefTable player={player} />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                { discTable && (
                    <motion.div
                        variants={tableVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <DiscTable player={player} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default DisplayStatContainer
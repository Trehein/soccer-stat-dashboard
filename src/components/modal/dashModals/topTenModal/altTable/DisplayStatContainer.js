import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AtkTable from './AtkTable'
import TeamTable from './TeamTable'
import DefTable from './DefTable'
import DiscTable from './DiscTable'
import ShotsTable from './ShotsTable'

const tableVariants = {
    hidden: {
        opacity: 0,
        y: 150,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .5,
            duration: .75,
            type: 'easeIn'
        }
    },
    exit: {
        opacity: 0,
        y: 150,
        transition: {
            // delay: .25,
            duration: .75,
            type: 'spring'
        }
    }
}

const DisplayStatContainer = ({player}) => {
    const [atkTable, setAtkTable] = useState(true);
    const [shotsTable, setShotsTable] = useState(false);
    const [teamTable, setTeamTable] = useState(false);
    const [defTable, setDefTable] = useState(false);
    const [discTable, setDiscTable] = useState(false);

    function tableReset () {
        setDiscTable(false); 
        setTeamTable(false); 
        setDefTable(false); 
        setAtkTable(false);
        setShotsTable(false);
    }

    return (
        <div>
            <div className="tableHeaderRow">
                <div className="tableTab" onClick={() => { tableReset(); setAtkTable(true) }}>
                    { player.position === "GKP" && (
                        <h4>GKP</h4>
                    )}
                    { player.position !== "GKP" && (
                        <h4>ATK</h4>
                    )}
                </div>
                <div className="tableTab" onClick={() => { tableReset(); setShotsTable(true) }}>
                    <h4>SHOTS</h4>
                </div>
                <div className="tableTab" onClick={() => { tableReset(); setTeamTable(true) }}>
                    <h4>TEAM</h4>
                </div>
                <div className="tableTab" onClick={() => { tableReset(); setDefTable(true) }}>
                    <h4>DEF</h4>
                </div>
                <div className="tableTab" onClick={() => { tableReset(); setDiscTable(true) }}>
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
                { shotsTable && (
                    <motion.div
                        variants={tableVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <ShotsTable shotsStats={player.shots} />
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
                        <TeamTable teamStats={player.team} />
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
                        <DefTable defStats={player.def} />
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
                        <DiscTable discStats={player.disc} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default DisplayStatContainer
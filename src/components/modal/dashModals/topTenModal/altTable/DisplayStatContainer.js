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
        y: 120,
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
        y: 120,
        transition: {
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
                <motion.div className="tableTab" 
                    onClick={() => { tableReset(); setAtkTable(true) }}
                    whileHover={{ backgroundColor: "rgba(245,0,87 ,1)", boxShadow: "0px 0px 8px rgb(0,0,0)" }}
                    animate={
                        atkTable ? { backgroundColor: "rgba(245,0,87 ,1)", boxShadow: "0px 0px 8px rgb(0,0,0)", color: "rgb(255,255,255)" } : { boxShadow: "0px 0px 0px rgb(255,255,255)", backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)" }
                    }
                >
                    { player.position === "GKP" && (
                        <h4>GKP</h4>
                    )}
                    { player.position !== "GKP" && (
                        <h4>ATK</h4>
                    )}
                </motion.div>
                <motion.div className="tableTab" 
                    onClick={() => { tableReset(); setShotsTable(true) }}
                    whileHover={{ backgroundColor: "rgba(213,0,249 ,1)", boxShadow: "0px 0px 8px rgb(0,0,0)" }}
                    animate={
                        shotsTable ? { backgroundColor: "rgba(213,0,249 ,1)", boxShadow: "0px 0px 8px rgb(0,0,0)", color: "rgb(255,255,255)" } : { boxShadow: "0px 0px 0px rgb(255,255,255)", backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)" }
                    }
                >
                    <h4>SHOTS</h4>
                </motion.div>
                <motion.div className="tableTab"
                    onClick={() => { tableReset(); setTeamTable(true) }}
                    whileHover={{ backgroundColor: "rgba(48,79,254 ,1)", boxShadow: "0px 0px 8px rgb(0,0,0)" }}
                    animate={
                        teamTable ? { backgroundColor: "rgba(48,79,254 ,1)", boxShadow: "0px 0px 8px rgb(0,0,0)", color: "rgb(255,255,255)" } : { boxShadow: "0px 0px 0px rgb(255,255,255)", backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)" }
                    }
                >
                    <h4>TEAM</h4>
                </motion.div>
                <motion.div className="tableTab"
                    onClick={() => { tableReset(); setDefTable(true) }}
                    whileHover={{ backgroundColor: "rgba(0,200,83 ,1)", boxShadow: "0px 0px 8px rgb(0,0,0)" }}
                    animate={
                        defTable ? { backgroundColor: "rgba(0,200,83 ,1)", boxShadow: "0px 0px 8px rgb(0,0,0)", color: "rgb(255,255,255)" } : { boxShadow: "0px 0px 0px rgb(255,255,255)", backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)" }
                    }
                >
                    <h4>DEF</h4>
                </motion.div>
                <motion.div className="tableTab" 
                    onClick={() => { tableReset(); setDiscTable(true) }}
                    whileHover={{ backgroundColor: "rgba(255,171,0 ,1)", boxShadow: "0px 0px 8px rgb(0,0,0)" }}
                    animate={
                        discTable ? { backgroundColor: "rgba(255,171,0 ,1)", boxShadow: "0px 0px 8px rgb(0,0,0)", color: "rgb(255,255,255)" } : { boxShadow: "0px 0px 0px rgb(255,255,255)", backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)" }
                    }
                >
                    <h4>DISC</h4>
                </motion.div>
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
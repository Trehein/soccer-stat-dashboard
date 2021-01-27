import React, { useState } from 'react'
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion'
import AtkTable from './AtkTable'
import TeamTable from './TeamTable'
import DefTable from './DefTable'
import DiscTable from './DiscTable'

const DisplayStatContainer = ({player}) => {
    const [atkTable, setAtkTable] = useState(true);
    const [teamTable, setTeamTable] = useState(false);
    const [defTable, setDefTable] = useState(false);
    const [discTable, setDiscTable] = useState(false);

    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                { atkTable && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <AtkTable player={player} setAtkTable={setAtkTable} setDiscTable={setDiscTable} setTeamTable={setTeamTable} />
                        {/* <h5>AtkTable</h5>
                        <p onClick={() => { setAtkTable(false); setTeamTable(true) }}>next</p>
                        <p onClick={() => { setAtkTable(false); setDiscTable(true) }}>prev</p> */}
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                { teamTable && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h5>TeamTable</h5>
                        <p onClick={() => { setTeamTable(false); setDefTable(true) }}>next</p>
                        <p onClick={() => { setTeamTable(false); setAtkTable(true) }}>prev</p>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                { defTable && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h5>DefTable</h5>
                        <p onClick={() => { setDefTable(false); setDiscTable(true) }}>next</p>
                        <p onClick={() => { setDefTable(false); setTeamTable(true) }}>prev</p>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                { discTable && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h5>DiscTable</h5>
                        <p onClick={() => { setDiscTable(false); setAtkTable(true) }}>next</p>
                        <p onClick={() => { setDiscTable(false); setDefTable(true) }}>prev</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default DisplayStatContainer
import React from 'react'
import { motion } from 'framer-motion'
import TopTenModal from './dashModals/topTenModal/TopTenModal'
import ComparePlayersModal from './dashModals/comparePlayersModal/ComparePlayersModal'
import TeamStatsModal from './dashModals/teamStatsModal/TeamStatsModal'
import CompareTeamsModal from './dashModals/compareTeamsModal/CompareTeamsModal'

const ModalSwitch = ({ modalContent }) => {
    switch (modalContent) {
        case "top10":
            return (
                <motion.div>
                    <TopTenModal />
                </motion.div>
            )
        case "comparePlayers":
            return (
                <motion.div>
                    <ComparePlayersModal />
                </motion.div>
            )
        case "teamStats":
            return (
                <motion.div>
                    <TeamStatsModal />
                </motion.div>
            )
        case "compareTeams":
            return (
                <motion.div>
                    <CompareTeamsModal />
                </motion.div>
            )
        default:
            return (
                <div></div>
            )
    }
}

export default ModalSwitch
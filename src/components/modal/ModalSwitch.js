import React from 'react'
import { motion } from 'framer-motion'
import TopTenModal from './dashModals/topTenModal/TopTenModal'
import ComparePlayersModal from './dashModals/comparePlayersModal/ComparePlayersModal'
import TeamStatsModal from './dashModals/teamStatsModal/TeamStatsModal'
import CompareTeamsModal from './dashModals/compareTeamsModal/CompareTeamsModal'

const ModalSwitch = ({ modalContent, setShowModal }) => {
    switch (modalContent) {
        case "top10":
            return (
                <motion.div>
                    <TopTenModal setShowModal={setShowModal} />
                </motion.div>
            )
        case "comparePlayers":
            return (
                <motion.div>
                    <ComparePlayersModal setShowModal={setShowModal} />
                </motion.div>
            )
        case "teamStats":
            return (
                <motion.div>
                    <TeamStatsModal setShowModal={setShowModal} />
                </motion.div>
            )
        case "compareTeams":
            return (
                <motion.div>
                    <CompareTeamsModal setShowModal={setShowModal} />
                </motion.div>
            )
        default:
            return (
                <div></div>
            )
    }
}

export default ModalSwitch
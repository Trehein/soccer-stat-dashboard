import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { pageContainer } from '../motionVariants/containerVariants'
import './Dashboard.css'
import DashboardCardList from './DashboardCardList'
import DashModal from './dashModals/DashModal'

const Dashboard = () => {
    const [showDashModal, setShowDashModal] = useState(true)
    const [modalContent, setModalContent] = useState(null)

    return (
        <motion.div className="pageContainer"
            variants={pageContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <DashModal 
                showDashModal={showDashModal} 
                modalContent={modalContent}
            />
            <DashboardCardList 
                setShowDashModal={setShowDashModal}
                setModalContent={setModalContent}
            />
        </motion.div>
    )
}

export default Dashboard
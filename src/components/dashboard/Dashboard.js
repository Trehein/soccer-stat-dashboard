import React from 'react'
import { motion } from 'framer-motion'
import { pageContainer } from '../motionVariants/containerVariants'
import './Dashboard.css'
import DashboardCardList from './DashboardCardList'

const Dashboard = ({ setModalContent, setShowModal }) => {

    return (
        <motion.div className="pageContainer"
            variants={pageContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <DashboardCardList 
                setShowModal={setShowModal}
                setModalContent={setModalContent}
            />
        </motion.div>
    )
}

export default Dashboard
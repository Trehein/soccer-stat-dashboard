import React from 'react'
import { motion } from 'framer-motion'
import { pageContainer } from '../motionVariants/containerVariants'
import './Dashboard.css'
import TopTen from './TopTen'

const Dashboard = () => {
    return (
        <motion.div className="pageContainer"
            variants={pageContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <TopTen />
        </motion.div>
    )
}

export default Dashboard
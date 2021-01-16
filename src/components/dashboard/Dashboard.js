import React from 'react'
import { motion } from 'framer-motion'
import { pageContainer } from '../motionVariants/containerVariants'

const Dashboard = () => {
    return (
        <motion.div className="pageContainer"
            variants={pageContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            Welcome to EFL Stat Central
        </motion.div>
    )
}

export default Dashboard
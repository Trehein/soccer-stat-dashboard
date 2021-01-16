import React from 'react'
import { motion } from 'framer-motion'
import { pageContainer } from '../motionVariants/containerVariants'

const TeamStats = () => {
    return (
        <motion.div className="pageContainer"
            variants={pageContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            TeamStats
        </motion.div>
    )
}

export default TeamStats
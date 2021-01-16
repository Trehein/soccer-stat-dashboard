import React from 'react'
import { motion } from 'framer-motion'
import { pageContainer } from '../motionVariants/containerVariants'

const CompareTeams = () => {
    return (
        <motion.div className="pageContainer"
            variants={pageContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h2>Compare Teams</h2>
        </motion.div>
    )
}

export default CompareTeams
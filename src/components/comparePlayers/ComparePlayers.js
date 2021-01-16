import React from 'react'
import { motion } from 'framer-motion'
import { pageContainer } from '../motionVariants/containerVariants'

const ComparePlayers = () => {
    return (
        <motion.div className="pageContainer"
            variants={pageContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            Compare Players
        </motion.div>
    )
}

export default ComparePlayers
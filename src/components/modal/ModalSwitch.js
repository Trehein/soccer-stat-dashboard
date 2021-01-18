import React from 'react'
import { motion } from 'framer-motion'

const ModalSwitch = ({ modalContent }) => {
    switch (modalContent) {
        case "Top Ten Players":
            return (
                <motion.div>

                </motion.div>
            )
        case "Compare Players":
            return (
                <motion.div>
                    
                </motion.div>
            )
        case "Team Stats":
            return (
                <motion.div>
                    
                </motion.div>
            )
        case "Compare Teams":
            return (
                <motion.div>
                    
                </motion.div>
            )
        default:
            return (
                <div></div>
            )
    }
}

export default ModalSwitch
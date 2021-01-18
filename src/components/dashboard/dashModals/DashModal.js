import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

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
            break;
    }
}

const DashModal = ({ showDashModal, setShowDashModal, modalContent }) => {
    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                { showDashModal && (
                    <motion.div className="backdrop"
                        variants={ backdrop }
                        animate="visible"
                        initial="hidden"
                    > 
                        <ModalSwitch modalContent={modalContent} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default DashModal
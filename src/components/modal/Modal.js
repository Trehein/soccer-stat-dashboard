import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ModalSwitch from './ModalSwitch'

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const Modal = ({ showModal, modalContent }) => {

    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                { showModal && (
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

export default Modal
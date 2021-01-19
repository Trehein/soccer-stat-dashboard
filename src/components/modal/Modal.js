import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModalSwitch from './ModalSwitch'

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "10vh",
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
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
                        <motion.div className="modal"
                            variants={modal}
                            initial="hidden"
                            animate="visible"
                        >
                            <ModalSwitch modalContent={modalContent} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Modal
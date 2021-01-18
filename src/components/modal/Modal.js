import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                { showModal && (
                    <motion.div className="backdrop"
                        variants={ backdrop }
                        animate="visible"
                        initial="hidden"
                    > 

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Modal
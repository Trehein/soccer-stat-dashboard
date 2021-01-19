import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModalSwitch from './ModalSwitch'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const modal = {
    hidden: { y: "-100vh", opacity: 0, transition: { duration: 1 } },
    visible: { 
      y: "10vh", 
      opacity: 1,
      transition: { delay: 0.5 }
    },
  }

const Modal = ({ showModal, modalContent, setShowModal }) => {

    const wrapperRef = useRef(null)
    useOutsideModal(wrapperRef)

    function useOutsideModal(ref) {
        useEffect(() => {
            //refs anything not in the ref and fires setShowModal on mousedown 
            function handleClickOutside(event) {
                if(ref.current && !ref.current.contains(event.target)) {
                    setShowModal(false)
                }
            }
            //listeners on anything 
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // unbind the event listener
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }, [ref])
    }

    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                { showModal && (
                    <motion.div className="backdrop"
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    > 
                        <motion.div className="modal"
                            ref={wrapperRef}
                            variants={modal}
                        >
                            <ModalSwitch modalContent={modalContent} setShowModal={setShowModal} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Modal
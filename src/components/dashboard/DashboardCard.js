import React from 'react'
import { motion } from 'framer-motion'
import DashIconPicker from './DashIconPicker'

const DashboardCard = ({ card, setShowModal, setModalContent }) => {
    function modalSetter () {
        setModalContent(card.title)
        setShowModal(true)
    } 

    return (
        <motion.div className="dashCard"
            onClick={ modalSetter }
            whileHover={{        
                scale: 1.05, 
                opacity: 1,
                textShadow: "0px 0px 4px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
        >
            <h1>{card.title}</h1>
            <DashIconPicker title={card.title} />
        </motion.div>
    )
}

export default DashboardCard


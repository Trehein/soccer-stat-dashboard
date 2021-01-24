import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FaArrowRight } from 'react-icons/fa'
import { modalLinkButton } from '../../../motionVariants/buttonVariants'
import TopTenContent from './TopTenContent'
import './TopTen.css'

const TopTenModal = ({ setShowModal }) => {
    return (
        <motion.div>
            <div className="modalHeader">
                <h2>Top Ten Players</h2>
                <div className="headerButtonContainer">
                    <Link to="/playerStats">
                        <motion.button className="modalButton"
                            onClick={() => setShowModal(false)}
                            variants={ modalLinkButton }
                            whileHover="hover"
                        >
                            All Player Stats
                            <IconContext.Provider value={{ size: '1em', style: { verticalAlign: 'middle', paddingLeft: '10px', paddingBottom: '5px' }}}>
                                <FaArrowRight />
                            </IconContext.Provider>
                        </motion.button>
                    </Link>
                </div>
            </div>
            <TopTenContent />
        </motion.div>
    )
}

export default TopTenModal
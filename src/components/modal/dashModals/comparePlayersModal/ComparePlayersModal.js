import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FaArrowRight } from 'react-icons/fa'
import { modalLinkButton } from '../../../motionVariants/buttonVariants'

const ComparePlayersModal = ({ setShowModal }) => {
    return (
        <motion.div>
            <div className="modalHeader">
                <h2>Compare Players</h2>
                <div className="headerButtonContainer">
                    <Link to="/comparePlayers">
                        <motion.button className="modalButton"
                            onClick={() => setShowModal(false)}
                            variants={ modalLinkButton }
                            whileHover="hover"
                        >
                            More Player Comparisons
                            <IconContext.Provider value={{ size: '1em', style: { verticalAlign: 'middle', paddingLeft: '10px', paddingBottom: '5px' }}}>
                                <FaArrowRight />
                            </IconContext.Provider>
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default ComparePlayersModal
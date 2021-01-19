import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FaArrowRight } from 'react-icons/fa'


const TopTenModal = () => {
    return (
        <motion.div>
            <div className="modalHeader">
                <h2>Top Ten Players</h2>
                <div className="headerButtonContainer">
                    <Link to="/playerStats">
                        <button className="modalButton">
                            All Player Stats
                            <IconContext.Provider value={{ size: '1em', style: { verticalAlign: 'middle', paddingLeft: '10px' }}}>
                                <FaArrowRight />
                            </IconContext.Provider>
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default TopTenModal
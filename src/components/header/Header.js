import React from 'react'
import './headerStyles.css'
import HeaderNavSVG from '../ui/buttons/headerNavButtons/HeaderNavSVG'
import HeaderNavButtonList from '../ui/buttons/headerNavButtons/HeaderNavButtonList'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header>
            <motion.div
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                whileHover={{
                    scale: 1.25,
                }}
                transition={{ duration: .5, type: 'spring', stiffness: 65 }}
            >
                <Link to='/'>
                    <HeaderNavSVG />
                </Link>
            </motion.div>
            <motion.div className="title"
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ delay: .5, duration: 1.75, type: 'spring', stiffness: 65 }}
            >
                <h1>
                    EPL Stat Central
                </h1>
            </motion.div>
            <HeaderNavButtonList />
        </header>
    )
}

export default Header
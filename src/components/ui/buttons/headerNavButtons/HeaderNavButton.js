import React from 'react'
import './headerNavButtonStyles.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const buttonVariant = {
    hidden: {
        y: -200,
        opacity: 0
    },
    visible: {
        opacity: .85,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hover: {
        scale: 1.1, 
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)"
    },
}

const HeaderNavButton = (props) => {
    return (
        <Link to={props.data.link}>
            <motion.button
                variants={buttonVariant}
                initial='hidden'
                animate='visible'
                whileHover='hover'
            >
                {props.data.title}
            </motion.button>
        </Link>
    )
}

export default HeaderNavButton
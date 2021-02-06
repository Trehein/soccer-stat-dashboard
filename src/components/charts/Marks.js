import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    open: { opacity: 1, y: 0, transition: {delay: .5, duration: 1} },
    closed: { opacity: 0, y: 0, transition: {duration: .5} }
}

const Marks = ({data, xScale, yScale, matchAccessor, ptsAccessor, onPlayer, color}) => 
    data.matches.map((d, index) =>  (
            <motion.circle
                className="mark"
                key={index}
                cx={xScale(matchAccessor(d))}
                cy={yScale(ptsAccessor(d))}
                r={4}
                fill={color}
                stroke="white"
                strokeWidth="1px"
                opacity="0"
                variants={variants} 
                animate={ onPlayer ? "open" : "closed" } 
            />
        )
    )


export default Marks
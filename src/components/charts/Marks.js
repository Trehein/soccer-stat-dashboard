import React from 'react'
import { motion } from 'framer-motion'
import Tooltip from '@material-ui/core/Tooltip';

const variants = {
    open: { opacity: 1, y: 0, transition: {delay: .5, duration: 1} },
    closed: { opacity: 0, y: 0, transition: {duration: .5} }
}

const Marks = ({data, xScale, yScale, matchAccessor, ptsAccessor, onPlayer, color}) => {
    return (
        data.matches.map((d, index) =>  (
            <Tooltip title={ptsAccessor(d)} key={index}>
                <motion.circle
                    className="mark"
                    cx={xScale(matchAccessor(d))}
                    cy={yScale(ptsAccessor(d))}
                    r={5}
                    display="hidden"
                    fill={color}
                    stroke="white"
                    strokeWidth="1px"
                    opacity="0"
                    variants={variants} 
                    animate={ onPlayer ? "open" : "closed" } 
                    cursor="pointer"
                >
                    {/* <title>{ptsAccessor(d)}</title> */}
                </motion.circle>
            </Tooltip>
        ))
    )
}


export default Marks
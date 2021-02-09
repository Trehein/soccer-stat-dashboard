import React from 'react'
import { motion } from 'framer-motion'
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const variants = {
    open: { opacity: 1, y: 0, transition: {delay: .5, duration: 1} },
    closed: { opacity: 0, y: 0, transition: {duration: .5} }
}

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: 'rgba(27, 27, 27, 0.87)',
      color: '#f5f5f9',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
    },
  }))(Tooltip);

const Marks = ({data, xScale, yScale, matchAccessor, ptsAccessor, oppAccessor, aAccessor, gsAccessor, onPlayer, color}) => {
    // console.log(data)
    return (
        data.matches.map((d, index) =>  (
            <HtmlTooltip 
                arrow
                placement="top"
                key={index}
                title={
                    <React.Fragment>
                        <h3>{oppAccessor(d)}</h3>
                        <h4 className="toolTip">PTS: {ptsAccessor(d)}</h4>
                        <h4 className="toolTip">Goals: {gsAccessor(d)}</h4>
                        <h4 className="toolTip">Assists: {aAccessor(d)}</h4>
                    </React.Fragment>
                }
            >
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
                />
            </HtmlTooltip>
        ))
    )
}

export default Marks
import React from "react"
import "./chartStyles.css"
import Chart from './chartFrame/Chart'
import { useChartDimensions } from "./chartFrame/utils"
// import { scaleLinear, line, curveMonotoneX } from "d3"
import { scaleLinear, line } from "d3"
import XAxis from './XAxis'
import YAxis from './YAxis'
import { motion } from 'framer-motion'
import Marks from './Marks'

const ptsAccessor = d => d.pts
const matchAccessor = d => d.match

const variants = {
    open: { opacity: 1, y: 0, transition: {duration: 1.25} },
    closed: { opacity: 0, y: -150, transition: {duration: 1.25} }
}

const TopTenCompareLineChart = ({ players, onPlayers, ptsExtent, colors }) => {
    
    const [ref, dimensions] = useChartDimensions()
    const innerHeight = dimensions.height - dimensions.marginTop - dimensions.marginBottom
    const innerWidth = dimensions.width - dimensions.marginLeft - dimensions.marginRight

    const yScale = scaleLinear()
        .domain([ptsExtent[1] + 1, ptsExtent[0]])
        .range([0, innerHeight])
        .nice()

    const yAxisScale = scaleLinear()
        .domain([ptsExtent[0], ptsExtent[1] + 1])
        .range([innerHeight, 0])
        .nice()

    const xScale = scaleLinear()
        .domain([0, 19]) // or use accessor instead of inline func
        .range([0, innerWidth])

    const lineGenerator = line()
        .x(d => xScale(matchAccessor(d)))
        .y(d => yScale(ptsAccessor(d)))
        // .curve(curveMonotoneX)

    console.log(onPlayers)

    return (
        <div className="TopTenCompareLine" ref={ref}>
            <Chart dimensions={dimensions}>
                <XAxis xScale={xScale} innerHeight={innerHeight} />
                <YAxis yScale={yAxisScale} innerWidth={innerWidth} />
                { players.map((player, index) => {
                    return (
                        <motion.path 
                            opacity="0" 
                            key={index} 
                            className="playerLine" 
                            stroke={colors[index]}
                            d={lineGenerator(player.matches)} 
                            variants={variants} 
                            animate={ onPlayers[index] ? "open" : "closed" } 
                        />
                    )
                })}
                { players.map((player, index) => {
                    return (
                        <Marks 
                            key={index}
                            data={player}
                            matchAccessor={matchAccessor}
                            ptsAccessor={ptsAccessor}
                            xScale={xScale}
                            yScale={yScale}
                            onPlayer={onPlayers[index]}
                            color={colors[index]}
                        />
                    )
                })}

                <text fontSize="1.5em" fontWeight="bold" transform={`translate(5, -15)`}  textAnchor="left">Top Point Scorers</text>
                <text fontSize="1.25em" transform={`translate(-35, ${innerHeight/2}) rotate(-90)`} textAnchor="middle">Points</text>
                <text fontSize="1.25em" transform={`translate(${innerWidth/2}, ${innerHeight + 40})`} textAnchor="middle">Match</text>
            </Chart>
        </div>
    )

}

export default TopTenCompareLineChart

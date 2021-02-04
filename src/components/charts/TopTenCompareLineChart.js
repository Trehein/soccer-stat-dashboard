import React from "react"
import "./chartStyles.css"
import Chart from './chartFrame/Chart'
import { useChartDimensions } from "./chartFrame/utils"
import { scaleLinear, line, curveMonotoneX } from "d3"
import XAxis from './XAxis'
import YAxis from './YAxis'
import { motion } from 'framer-motion'

const ptsAccessor = d => d.pts
const matchAccessor = d => d.match

const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -100 }
}

const TopTenCompareLineChart = ({ players, onPlayers, ptsExtent }) => {
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
        .curve(curveMonotoneX)

    console.log(onPlayers)

    return (
        <div className="TopTenCompareLine" ref={ref}>
            <Chart dimensions={dimensions}>
                <XAxis xScale={xScale} innerHeight={innerHeight} />
                <YAxis yScale={yAxisScale} innerWidth={innerWidth} />
                { players.map((player, index) => {
                    return (
                        <motion.path opacity="0" key={index} className="playerLine" d={lineGenerator(player.matches)} variants={variants} animate={ onPlayers[index] ? "open" : "closed" } />
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

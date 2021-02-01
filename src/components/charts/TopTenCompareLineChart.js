import React from "react"
import "./chartStyles.css"
import Chart from './chartFrame/Chart'
import { useChartDimensions } from "./chartFrame/utils"
import { scaleLinear, line, curveMonotoneX } from "d3"
import XAxis from './XAxis'
import YAxis from './YAxis'

const ptsAccessor = d => d.pts
const matchAccessor = d => d.match

const TopTenCompareLineChart = ({ players, ptsExtent }) => {
    const [ref, dimensions] = useChartDimensions()
    const innerHeight = dimensions.height - dimensions.marginTop - dimensions.marginBottom
    const innerWidth = dimensions.width - dimensions.marginLeft - dimensions.marginRight

    console.log(ptsExtent)

    const yScale = scaleLinear()
        .domain([ptsExtent[1], ptsExtent[0]])
        .range([0, innerHeight])
        .nice()

    const yAxisScale = scaleLinear()
        .domain([ptsExtent[0], ptsExtent[1]])
        .range([innerHeight, 0])
        .nice()


    const xScale = scaleLinear()
        // .domain([1, max(exPlayer, matchAccessor)]) // or use accessor instead of inline func
        .domain([0, 19]) // or use accessor instead of inline func
        .range([0, innerWidth])

    const lineGenerator = line()
        .x(d => xScale(matchAccessor(d)))
        .y(d => yScale(ptsAccessor(d)))
        .curve(curveMonotoneX)

        players[6].matches.map(match => {
            console.log(match.pts)
        })

    return (
        <div className="TopTenCompareLine" ref={ref}>
            <Chart dimensions={dimensions}>
                <XAxis xScale={xScale} innerHeight={innerHeight} />
                <YAxis yScale={yAxisScale} innerWidth={innerWidth} />
                { players.map(player => {
                    return (
                        <path key={player.name} className="playerLine" d={lineGenerator(player.matches)} />
                    )
                })}
                {/* <path className="playerLine" d={lineGenerator(players[0].matches)} /> */}
            </Chart>
        </div>
    )
}

export default TopTenCompareLineChart

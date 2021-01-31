import React from "react"
import "./chartStyles.css"
import Chart from './chartFrame/Chart'
import { useChartDimensions } from "./chartFrame/utils"
import { scaleLinear, max, line } from "d3"
// import AxisLeft from './AxisLeft'
// import AxisBottom from './AxisBottom'
import XAxis from './XAxis'
import YAxis from './YAxis'


const ptsAccessor = d => d.pts
const matchAccessor = d => d.match

const TopTenCompareLineChart = ({ players }) => {
    const [ref, dimensions] = useChartDimensions()
    const innerHeight = dimensions.height - dimensions.marginTop - dimensions.marginBottom
    const innerWidth = dimensions.width - dimensions.marginLeft - dimensions.marginRight

    // const exPlayer = players[0].matches

    const yScale = scaleLinear()
        .domain([-3, max(players[0].matches, ptsAccessor)])
        .range([0, innerHeight])

    const yAxisScale = scaleLinear()
        .domain([-3, max(players[0].matches, ptsAccessor)])
        .range([innerHeight, 0])

    const xScale = scaleLinear()
        // .domain([1, max(exPlayer, matchAccessor)]) // or use accessor instead of inline func
        .domain([0, 19]) // or use accessor instead of inline func
        .range([0, innerWidth])

    const lineGenerator = line()
        .x(d => xScale(matchAccessor(d)))
        .y(d => yScale(ptsAccessor(d)))

    return (
        <div className="TopTenCompareLine" ref={ref}>
            <Chart dimensions={dimensions}>
                <XAxis xScale={xScale} innerHeight={innerHeight} />
                <YAxis yScale={yAxisScale} innerWidth={innerWidth} />
                {/* { players.map(player => {
                    return (
                        <path className="playerLine" d={lineGenerator(player.matches)} />
                    )
                })} */}
                {/* <AxisBottom 
                    xScale={xScale}
                    innerHeight={innerHeight}
                />

                <AxisLeft 
                    yScale={yAxisScale}
                /> */}
                <path className="playerLine" d={lineGenerator(players[0].matches)} />
                {/* <path className="playerLine" d={lineGenerator(players[0].matches)} />
                <path className="playerLine" d={lineGenerator(players[4].matches)} />
                <path className="playerLine" d={lineGenerator(players[9].matches)} /> */}

            </Chart>
        </div>
    )
}

export default TopTenCompareLineChart

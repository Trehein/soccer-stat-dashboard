import React from "react"
import PropTypes from "prop-types"
import "../chartStyles.css"
import Chart from '../chartFrame/Chart'
import { useChartDimensions, accessorPropsType} from "../chartFrame/utils"
import Axis from '../Axis'
import Line from "./Line"
import { scaleLinear } from 'd3'

const TopTenCompareLineChart = ({ players, ptsExtent, xAccessor, yAccessor, label }) => {
    const [ref, dimensions] = useChartDimensions()
    const innerHeight = dimensions.height - dimensions.marginTop - dimensions.marginBottom
    const innerWidth = dimensions.width - dimensions.marginLeft - dimensions.marginRight


    const xScale = scaleLinear()
        // .domain([1, max(exPlayer, xAccessor)]) // or use accessor instead of inline func
        .domain([0, 20]) // or use accessor instead of inline func
        .range([0, innerWidth])

    const yScale = scaleLinear()
        .domain([ptsExtent[0], ptsExtent[1], yAccessor])
        .range([0, innerHeight])
        .nice()

    const xAccessorScaled = d => xScale(xAccessor(d))
    const yAccessorScaled = d => yScale(yAccessor(d))
    const y0AccessorScaled = yScale(yScale.domain()[0])

    return (
        <div className="TopTenCompareLine" ref={ref}>
            <Chart dimensions={dimensions}>







                {/* { players.map(player => {
                    return (
                        <path className="playerLine" d={lineGenerator(player.matches)} />
                    )
                })} */}

            </Chart>
        </div>
    )
}

TopTenCompareLineChart.propTypes = {
    xAccessor: accessorPropsType,
    yAccessor: accessorPropsType,
    label: PropTypes.string,
}

TopTenCompareLineChart.defaultProps = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
}

export default TopTenCompareLineChart

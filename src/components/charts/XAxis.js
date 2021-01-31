import React, { useRef, useEffect } from 'react'
import { axisBottom, select } from 'd3'

const XAxis = ({ xScale, innerHeight }) => {
    const ref = useRef()
    useEffect(() => {
        const xAxisG = select(ref.current)
        const xAxis = axisBottom(xScale).tickSize([-innerHeight]).ticks(18).tickPadding(8) //manually sets tick amount. remove ticks() to auto generate
        xAxisG.call(xAxis)
    }, [xScale, innerHeight])
    return (
        <g transform={`translate(0,${innerHeight})`} ref={ref}>

        </g>
    )
}

export default XAxis
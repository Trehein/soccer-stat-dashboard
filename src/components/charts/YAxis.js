import React, { useRef, useEffect } from 'react'
import { axisLeft, select } from 'd3'

const XAxis = ({ yScale, innerWidth }) => {
    const ref = useRef()
    useEffect(() => {
        const xAxisG = select(ref.current)
        const xAxis = axisLeft(yScale).tickSize(innerWidth).ticks(18).tickPadding(8) //manually sets tick amount. remove ticks() to auto generate
        xAxisG.call(xAxis)
    }, [yScale, innerWidth])
    return (
        <g transform={`translate(${innerWidth},0)`} ref={ref}>

        </g>
    )
}

export default XAxis
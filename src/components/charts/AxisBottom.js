import React from 'react'

const AxisBottom = ({ xScale, innerHeight }) =>                 
    xScale.ticks().map((tickValue, i) => 
        <g key={i} transform={`translate(${xScale(tickValue)}, 0)`}>
            <line 
                y2={innerHeight}
                stroke="grey"
            />
            <text 
                y={innerHeight + 3} 
                style={{textAnchor: 'middle'}}
                dy='.71em'
            >
                {tickValue}
            </text>
        </g>
)

export default AxisBottom
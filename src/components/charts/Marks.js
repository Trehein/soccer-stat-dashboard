import React from 'react'

const Marks = ({data, xScale, yScale, matchAccessor, ptsAccessor}) => 
    data.matches.map((d, index) =>  (
            <circle
                className="mark"
                key={index}
                cx={xScale(matchAccessor(d))}
                cy={yScale(ptsAccessor(d))}
                r={8}
            />
        )
    )


export default Marks
import React from 'react'
import * as d3 from "d3"
import PieChartFrame from '../chartFrame/PieChartFrame'
import { useChartDimensions } from '../chartFrame/utils'
import "./pieStyles.css"


const ModalTeamPieChart = ({ allPlayers, posTotals }) => {
    const [ref, dimensions] = useChartDimensions({})
    const outerRadius = dimensions.width / 2 - 20;
    const innerRadius = 30;

    // console.log(allPlayers)
    // console.log(posTotals)

    let pie = d3.pie()
        .value(function(d) { return d.pts })
        (posTotals)

    pie.forEach(d => d.outerRadius = outerRadius - 20)


    const Slice = props => {
        let { pie } = props

        // console.log(props.pie)

        let arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)

        return pie.map((slice, index) => {
            return <path
                className="pieSlice"
                d={arc(slice)} 
                fill="orange"
                key={index} 
                id={slice.data.pos}
                //onClick={(e) => handleClick(e, slice)}
                //onMouseOver={(e) => handleMouseOver(e, slice)}
                //onMouseOut={(e) => handleMouseOut(e, slice)}
            />
        })
    }

    return (
        <div className="Donut" ref={ref}>
            <PieChartFrame dimensions={dimensions}>
                <Slice pie={pie} />
            </PieChartFrame>
        </div>
    )
}

export default ModalTeamPieChart
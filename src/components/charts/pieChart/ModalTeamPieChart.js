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

    let pieGen = d3.pie()
        .value(d => d.pts)
        .sort((a, b) => a.pos.localeCompare(b.pos))

    let posPie = pieGen(posTotals)

    // console.log(pie)

    posPie.forEach(d => d.outerRadius = outerRadius - 20)


    const Slice = props => {
        let { posPie } = props

        // console.log(pie)

        let arc = d3.arc()
            .innerRadius(innerRadius + 30)
            .outerRadius(outerRadius + 10)

        return posPie.map((slice, index) => {
            return <path
                className="pieSlice"
                d={arc(slice)} 
                fill={slice.data.color}
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
                <Slice posPie={posPie} />
            </PieChartFrame>
        </div>
    )
}

export default ModalTeamPieChart
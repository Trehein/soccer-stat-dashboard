import React from 'react'
import * as d3 from "d3"
import PieChartFrame from '../chartFrame/PieChartFrame'
import { useChartDimensions } from '../chartFrame/utils'
import "./pieStyles.css"


const ModalTeamPieChart = ({ allPlayers, posTotals }) => {
    const [ref, dimensions] = useChartDimensions({})
    const outerRadius = dimensions.width / 2 - 20;
    const innerRadius = 30;

    console.log(allPlayers)

    let outerPieGen = d3.pie()
        .value(d => d.atk.g)
        .sort((a, b) => a.position.localeCompare(b.position))
    let playerPieData = outerPieGen(allPlayers)
    playerPieData.forEach(d => d.outerRadius = outerRadius - 30)

    let innerPieGen = d3.pie()
        .value(d => d.pts)
        .sort((a, b) => a.pos.localeCompare(b.pos))
    let posPieData = innerPieGen(posTotals)
    posPieData.forEach(d => d.outerRadius = outerRadius - 20)

    function playerColorPicker (pos) {
        switch (pos) {
            case "DEF":
                return "blue"
            case "FWD":
                return "red"
            case "MID":
                return "green"
            case "GKP":
                return "yellow"
            default:
                return "black"
        }
    }

    const InnerSlice = props => {
        let { posPieData } = props

        let arc = d3.arc()
            .innerRadius(innerRadius + 50)
            .outerRadius(outerRadius - 30)

        return posPieData.map((slice, index) => {
            return <path
                className="pieSlice"
                d={arc(slice)} 
                fill={slice.data.color}
                key={index} 
                id={slice.data.pos}
                stroke="black"
                strokeWidth=".5px"
                //onClick={(e) => handleClick(e, slice)}
                //onMouseOver={(e) => handleMouseOver(e, slice)}
                //onMouseOut={(e) => handleMouseOut(e, slice)}
            />
        })
    }

    const OuterSlice = props => {
        let { playerPieData } = props

        let arc = d3.arc()
            .innerRadius(innerRadius + 70)
            .outerRadius(outerRadius + 10)

        return playerPieData.map((slice, index) => {
            return <path
                className="pieSlice"
                d={arc(slice)} 
                fill={playerColorPicker(slice.data.position)}
                key={index} 
                id={slice.data.position}
                stroke="black"
                strokeWidth=".5px"
                //onClick={(e) => handleClick(e, slice)}
                //onMouseOver={(e) => handleMouseOver(e, slice)}
                //onMouseOut={(e) => handleMouseOut(e, slice)}
            />
        })
    }

    return (
        <div className="Donut" ref={ref}>
            <PieChartFrame dimensions={dimensions}>
                <InnerSlice posPieData={posPieData} />
                <OuterSlice playerPieData={playerPieData} />
            </PieChartFrame>
        </div>
    )
}

export default ModalTeamPieChart
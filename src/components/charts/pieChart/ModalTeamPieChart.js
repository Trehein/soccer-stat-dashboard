import React from 'react'
import * as d3 from "d3"
import PieChartFrame from '../chartFrame/PieChartFrame'
import { useChartDimensions } from '../chartFrame/utils'
import "./pieStyles.css"

const ModalTeamPieChart = ({ allPlayers, posTotals }) => {
    const [ref, dimensions] = useChartDimensions({})
    const outerRadius = dimensions.width / 2 - 20;
    const innerRadius = 60;

    let outerPieGen = d3.pie()
        .value(d => d.atk.g)
        .sort((a, b) => a.position.localeCompare(b.position))
    let playerPieData = outerPieGen(allPlayers)
    playerPieData.forEach(d => d.outerRadius = outerRadius)

    let innerPieGen = d3.pie()
        .value(d => d.pts)
        .sort((a, b) => a.pos.localeCompare(b.pos))
    let posPieData = innerPieGen(posTotals)
    posPieData.forEach(d => d.outerRadius = outerRadius)

    function calcTotal (posPieData) {
        let total = 0;
        posPieData.map(pos => {
            return total = total + pos.data.pts;
        })
        return total;
    }

    function playerColorPicker (pos) {
        switch (pos) {
            case "DEF":
                return "rgba(41,121,255 ,1)"
            case "FWD":
                return "rgba(255,23,68 ,1)"
            case "MID":
                return "rgba(0,230,118 ,1)"
            case "GKP":
                return "rgba(255,234,0 ,1)"
            default:
                return "black"
        }
    }

    // const handleMouseOver = (e, slice) => {
    //     d3.select(e.target)
    //         .transition()
    //         .duration(500)
    //         .attr('stroke', 'black')
    //         .attr('stroke-width', 2)
    //         // .style('fill', d => {
    //         //     if (e.target.getAttribute('id') === slice.data.key) {
    //         //         return slice.data.bright
    //         //     } else {
    //         //         return slice.data.bright
    //         //     }
    //         // })
    //         .style('cursor', 'pointer')
    // }

    // const handleMouseOut = (e, slice) => {
    //     d3.select(e.target)
    //         .transition()
    //         .duration(750)
    //         // .style('fill', d => slice.data.color)
    //         .attr('stroke-width', '.5px')
    // }

    // const handleClick = (e, slice) => {
    //     // console.log(slice.data)
    //     setGenre('The ' + slice.data.genre)
    //     setDesc(slice.data.desc)
    //     setGenreTitle('For the ' + slice.data.genre + 's')
    //     setPeeves('Pet Peeves: ' + slice.data.peeves)
    //     setRec('Recommended Book Genres: ' + slice.data.rec)
    //     // d3.select(e.target)
    //     //     .transition()
    //     //     .duration(1000)
    //     //     .style('fill', d => 'black')
    // } 

    const InnerSlice = props => {
        let { posPieData } = props

        let arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius - 50)

        return posPieData.map((slice, index) => {
            return (
            <path
                className="pieSlice"
                d={arc(slice)} 
                fill={slice.data.color}
                key={index} 
                id={slice.data.pos}
                stroke="black"
                strokeWidth=".5px"
                cursor='pointer'
                //onClick={(e) => handleClick(e, slice)}
                //onMouseOver={(e) => handleMouseOver(e, slice)}
                //onMouseOut={(e) => handleMouseOut(e, slice)}
            >
                <title>{slice.data.pos}</title>
            </path>
        )})
    }

    const InnerLabel = props => {
        let { posPieData } = props

        let arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius - 50)
        
        return posPieData.map((label, index) => {
            if(label.data.pts > 0) {
                return <text
                    transform={`translate(${arc.centroid(label)})`}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="white"
                    fontSize="17"
                    fontFamily="Century Gothic"
                    key={index}
                    cursor='pointer'
                >
                    {(label.data.pts)}
                    <title>{label.data.pos}</title>
                </text>
            } else {
                return null;
            }
        })
    }

    const OuterSlice = props => {
        let { playerPieData } = props

        let arc = d3.arc()
            .innerRadius(innerRadius + 65)
            .outerRadius(outerRadius)

        return playerPieData.map((slice, index) => {
            return <path
                className="pieSlice"
                d={arc(slice)} 
                fill={playerColorPicker(slice.data.position)}
                key={index} 
                id={slice.data.position}
                stroke="black"
                strokeWidth=".5px"
                cursor='pointer'
                //onClick={(e) => handleClick(e, slice)}
                //onMouseOver={(e) => handleMouseOver(e, slice)}
                //onMouseOut={(e) => handleMouseOut(e, slice)}
            >
                <title>{slice.data.name}</title>
            </path>
        })
    }

    const OuterLabel = props => {
        let { playerPieData } = props;
        
        let arc = d3.arc()
            .innerRadius(innerRadius + 65)
            .outerRadius(outerRadius)
        
        return playerPieData.map((label, index) => {
            if(label.data.atk.g > 0) {
                return <text
                    transform={`translate(${arc.centroid(label)})`}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="white"
                    fontSize="13"
                    fontFamily="Century Gothic"
                    key={index}
                    cursor='pointer'
                >
                    {(label.data.atk.g)}
                    <title>{label.data.name}</title>
                </text>
            } else {
                return null;
            }
        })
    }

    const CenterLabel = () => {
        return <text
            transform={`translate(0, -10)`}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="20"
            fontFamily="Century Gothic"
            fontWeight="bold"
        >
            Goals
        </text>
    }

    const CenterStatLabel = () => {
        return <text
            transform={`translate(0, 15)`}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="25"
            fontFamily="Century Gothic"
            fontWeight="bold"
        >
            {calcTotal(posPieData)}
        </text>
    }

    return (
        <div className="Donut" ref={ref}>
            <PieChartFrame dimensions={dimensions}>
                <InnerSlice posPieData={posPieData} />
                <InnerLabel posPieData={posPieData} />
                <OuterSlice playerPieData={playerPieData} />
                <OuterLabel playerPieData={playerPieData} />
                <CenterLabel />
                <CenterStatLabel />
            </PieChartFrame>
        </div>
    )
}

export default ModalTeamPieChart
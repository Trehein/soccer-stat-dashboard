import React from 'react'
import { GiBabyfootPlayers, GiSoccerKick, GiSoccerField } from 'react-icons/gi'
import { RiTeamFill } from 'react-icons/ri'
import { IconContext } from 'react-icons'

const DashIconPicker = (props) => {
    switch(props.title) {
        case "Top Ten Players":
            return (
                <IconContext.Provider value={{ size: '4em', style: { verticalAlign: 'middle' }}}>
                    <GiSoccerKick />
                </IconContext.Provider>
            )
        case "Compare Players": 
            return (
                <IconContext.Provider value={{ size: '4em', style: { verticalAlign: 'middle' }}}>
                    <GiBabyfootPlayers />
                </IconContext.Provider>
            )
        case "Team Stats": 
            return (
                <IconContext.Provider value={{ size: '4em', style: { verticalAlign: 'middle' }}}>
                    <RiTeamFill />
                </IconContext.Provider>
            )
        case "Compare Teams": 
            return (
                <IconContext.Provider value={{ size: '5em', style: { verticalAlign: 'middle' }}}>
                    <GiSoccerField />
                </IconContext.Provider>
            )
        default :
            return (
                <div>No Icon Found</div>
            )        
    }
}

export default DashIconPicker
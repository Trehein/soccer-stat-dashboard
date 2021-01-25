import React from 'react'

function clubSwitch (player) {
    switch (player.club) {
        case "ARS":
            return ( "Arsenal" )
        case "AVL":
            return ( "Aston Villa" )
        case "BHA":
            return ( "Brighton" )
        case "BUR":
            return ( "Burnley" )
        case "CHE":
            return ( "Chelsea" )
        case "CRY":
            return ( "Crystal Palace" )
        case "EVE":
            return ( "Everton" )
        case "FUL":
            return ( "Fulham" )
        case "LEE":
            return ( "Leeds" )
        case "LEI":
            return ( "Leicester" )
        case "LIV":
            return ( "Liverpool" )
        case "MCI":
            return ( "Man City" )
        case "MUN":
            return ( "Man Utd" )
        case "NEW":
            return ( "Newcastle" )
        case "SHU":
            return ( "Sheffield Utd" )
        case "SOU":
            return ( "Southampton" )
        case "TOT":
            return ( "Spurs" )
        case "WBA":
            return ( "West Brom" )
        case "WHU":
            return ( "West Ham" )
        case "WOL":
            return ( "Wolves" )
        default:
            return ( "" )
    }
}

const ClubDisplay = ({ player }) => {
    return (
        <div className="clubDisplayBox">
            <h3>{clubSwitch(player)}</h3>
        </div>
    )
}

export default ClubDisplay 
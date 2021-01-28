import React from 'react'

const TeamTable = ({ teamStats }) => {
    console.log(teamStats)
    return (
        <div className="tableContainer">
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Assists</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{teamStats.assists}</h5>
                </div>
            </div>
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Big Chances</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{teamStats.bigChanceCreate}</h5>
                </div>
            </div>
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Crosses</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{teamStats.crosses}</h5>
                </div>
            </div>
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Passes</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{teamStats.passes}</h5>
                </div>
            </div>
        </div>
    )
}

export default TeamTable
import React from 'react'

const AtkTable = ({ player }) => {
    const atkStats = getAtkStats(player)

    function getAtkStats (player) {
        return (
            player.atk
        )
    }

    return (
        <div>
            { player.position === "GKP" && (
                <div className="tableHeaderRow">
                    <h4>Goalkeeping</h4>
                </div>
            )}
            { player.position !== "GKP" && (
                <div className="tableContainer">
                    <div className="tableStatBox">
                        <div className="tableStatTitleBox">
                            <h5>Goals</h5>
                        </div>
                        <div className="tableStatNumBox">
                            <h5>{atkStats.g}</h5>
                        </div>
                    </div>
                    <div className="tableStatBox">
                        <div className="tableStatTitleBox">
                            <h5>Headers</h5>
                        </div>
                        <div className="tableStatNumBox">
                            <h5>{atkStats.head}</h5>
                        </div>
                    </div>
                    <div className="tableStatBox">
                        <div className="tableStatTitleBox">
                            <h5>GPM</h5>
                        </div>
                        <div className="tableStatNumBox">
                            <h5>{atkStats.gpm}</h5>
                        </div>
                    </div>
                    <div className="tableStatBox">
                        <div className="tableStatTitleBox">
                            <h5>Right Foot</h5>
                        </div>
                        <div className="tableStatNumBox">
                            <h5>{atkStats.gwrf}</h5>
                        </div>
                    </div>
                    <div className="tableStatBox">
                        <div className="tableStatTitleBox">
                            <h5>From Pen</h5>
                        </div>
                        <div className="tableStatNumBox">
                            <h5>{atkStats.pens}</h5>
                        </div>
                    </div>
                    <div className="tableStatBox">
                        <div className="tableStatTitleBox">
                            <h5>Left Foot</h5>
                        </div>
                        <div className="tableStatNumBox">
                            <h5>{atkStats.gwlf}</h5>
                        </div>
                    </div>
                    <div className="tableStatBox">
                        <div className="tableStatTitleBox">
                            <h5>From FK</h5>
                        </div>
                        <div className="tableStatNumBox">
                            <h5>{atkStats.fks}</h5>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AtkTable
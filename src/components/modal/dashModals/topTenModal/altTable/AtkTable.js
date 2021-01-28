import React from 'react'

const AtkTable = ({ player }) => {

    return (
        <div>
            { player.position === "GKP" && (
                <div className="tableHeaderRow">
                    <h4>Goalkeeping</h4>

                </div>
            )}
            { player.position !== "GKP" && (
                <div className="tableHeaderRow">
                    <h4>Attacking</h4>

                </div>
            )}
        </div>
    )
}

export default AtkTable
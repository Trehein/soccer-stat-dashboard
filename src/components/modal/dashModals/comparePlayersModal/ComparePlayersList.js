import React from 'react'

const ComparePlayersList = ({ players }) => {
    return (
        <div className="comparePlayersListContainer">
            <div className="compareListHeader">
                <div className="headerPlayerContainer">
                    <h3>
                        Player
                    </h3>
                </div>
                <div className="headerStatContainer">
                    <div className="titleContainer">
                        <div className="h3Underline">
                            <h3>
                                PTS
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComparePlayersList
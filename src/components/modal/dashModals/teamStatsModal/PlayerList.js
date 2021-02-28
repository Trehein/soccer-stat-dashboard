import React from 'react'
import PlayerListItem from './PlayerListItem'

const PlayerList = ({ players, onSlice }) => {

    return (
        <div className="playerListContainer">
            <div className="playerListHeader">
                <div className="headerBox">
                    <div className="headerPlayerName">
                        <h3>
                            Player
                        </h3>
                    </div>
                </div>
                <div className="headerBox">
                    <div className="headerStatBox">
                        <h3>
                            Position
                        </h3>
                    </div>
                    <div className="headerStatBox">
                        <h3>
                            Goals
                        </h3>
                    </div>
                </div>
            </div>
            <div>
                { players.map(player => {
                    return (
                        <PlayerListItem key={player.name} player={player} />
                    )
                })}
            </div>
        </div>
    )
}

export default PlayerList 
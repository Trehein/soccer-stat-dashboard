import React from 'react'
import ClubLogoPicker from '../../../../utils/ClubLogoPicker'

const ComparePlayersLI = ({ player, onPlayers, setOnPlayers, index, color }) => {
    console.log(color)

    function handlePlayerSet () {
        let items = [...onPlayers]
        let item = items[index]
        function itemSwitch (item) {
            return (
                item ? item = false : item = true
            )
        }
        items[index] = itemSwitch(item);
        setOnPlayers(items)
    }

return (
        <li className="playerListRow" onClick={ handlePlayerSet }>
            <div className="nameBox">
                <ClubLogoPicker player={player} />
                <div className="playerName">
                    <h5>
                        {player.name}
                    </h5>
                </div>
            </div>
            <div className="statCheckContainer">
                <div className="statBox" >
                    <h5>
                        {player.totalPTS}
                    </h5>
                        <div className="colorBox" style={{background: `${color}`}} />
                </div>
            </div>
        </li>
    )
}

export default ComparePlayersLI
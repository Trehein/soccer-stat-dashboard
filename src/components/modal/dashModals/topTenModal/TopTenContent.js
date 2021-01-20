import React from 'react'
import allPlayerStats from '../../../../datasets/allPlayersStats.json'

const topTen = allPlayerStats.sort((a, b) => { return a.totalPts < b.totalPts ? 1 : -1; }).slice(0, 10)

const TopTenContent = () => {
    return (
        <>
            <div className="modalContentContainer">
                <div className="topTenListContainer">
                    { topTen.map(player => {
                        return (
                            <div key={player.name}>
                                <h4>
                                    {player.name}
                                </h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TopTenContent
import React from 'react'
import TopTenListItem from './TopTenListItem'

const TopTenList = ({ topTen }) => {
    return (
        <div className="topTenListContainer">
            <div className="topTenHeader">
                <div className="topTenTitleNameContainer">
                    <h3>
                        Player
                    </h3>
                </div>
                <div className="topTenListStatContainer">
                    <div className="topTenStatTitleBox">
                        <div className="h3Underline">
                            <h3>
                                PTS
                            </h3>
                        </div>
                    </div>
                    <div className="topTenStatTitleBox">
                        <div className="h3Underline">
                            <h3>
                                GS
                            </h3>
                        </div>
                    </div>
                    <div className="topTenStatTitleBox">
                        <div className="h3Underline">
                            <h3>
                                A
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                { topTen.map(player => {
                    return (
                        <TopTenListItem player={player} key={player.name}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default TopTenList
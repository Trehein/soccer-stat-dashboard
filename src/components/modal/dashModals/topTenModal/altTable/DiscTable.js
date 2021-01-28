import React from 'react'

const DiscTable = ({ discStats }) => {
    return (
        <div className="tableContainer">
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Fouls</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{discStats.fouls}</h5>
                </div>
            </div>
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Offsides</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{discStats.offsides}</h5>
                </div>
            </div>
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Yellow Cards</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{discStats.yc}</h5>
                </div>
            </div>
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Red Cards</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{discStats.rc}</h5>
                </div>
            </div>
        </div>
    )
}

export default DiscTable
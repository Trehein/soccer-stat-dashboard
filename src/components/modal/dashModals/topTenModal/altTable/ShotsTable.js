import React from 'react'

const ShotsTable = ({ shotsStats }) => {
    return (
        <div className="tableContainer">
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Shots</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{shotsStats.shots}</h5>
                </div>
            </div>  
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>On Target</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{shotsStats.shotsOT}</h5>
                </div>
            </div>  
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Shooting %</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{shotsStats.shotPerc}</h5>
                </div>
            </div>  
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Hit Wood</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{shotsStats.hitWood}</h5>
                </div>
            </div>  
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Big Miss</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{shotsStats.bigMiss}</h5>
                </div>
            </div>  
        </div>
    )
}

export default ShotsTable
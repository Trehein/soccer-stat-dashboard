import React from 'react'

const DefTable = ({ defStats }) => {
    // console.log(defStats)
    return (
        <div className="tableContainer">
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Tackles</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{defStats.tackles}</h5>
                </div>
            </div>
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Interceptions</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{defStats.interceptions}</h5>
                </div>
            </div>
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Clearances</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{defStats.clearances}</h5>
                </div>
            </div>
            <div className="tableStatBox">
                <div className="tableStatTitleBox">
                    <h5>Headed Clearance</h5>
                </div>
                <div className="tableStatNumBox">
                    <h5>{defStats.headedClearance}</h5>
                </div>
            </div>
        </div>
    )
}

export default DefTable
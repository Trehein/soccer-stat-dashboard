import React, { createContext, useContext } from 'react'
import { dimensionsPropsType } from "./utils"
import "./Chart.css"

const ChartContext = createContext()
export const useChartDimensions = () => useContext(ChartContext)

//no margin buffer
const PieChartFrame = ({ dimensions, children }) => (
    <ChartContext.Provider value={dimensions}>
      <svg className="Chart" width={dimensions.width} height={dimensions.height}>
        <g id="bounds" transform={`translate(${dimensions.width / 2}, ${dimensions.height / 2})`}>
          { children }
        </g>    
      </svg>
    </ChartContext.Provider>
  )
  
  PieChartFrame.propTypes = {
    dimensions: dimensionsPropsType
  }
  
  PieChartFrame.defaultProps = {
    dimensions: {}
  }
  
  export default PieChartFrame
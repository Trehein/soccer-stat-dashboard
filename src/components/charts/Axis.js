import React from "react"
import PropTypes from "prop-types"
import { dimensionsPropsType } from "./chartFrame/utils";
import { useChartDimensions } from "./chartFrame/Chart";

const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical,
}
const Axis = ({ dimension, ...props }) => {
  const dimensions = useChartDimensions()
  const Component = axisComponentsByDimension[dimension]
  if (!Component) return null

  return (
    <Component {...props}
      dimensions={dimensions}
    />
  )
}

Axis.propTypes = {
  dimension: PropTypes.oneOf(["x", "y"]),
  dimensions: dimensionsPropsType,
  scale: PropTypes.func,
  label: PropTypes.string,
}

Axis.defaultProps = {
  dimension: "x",
  scale: null,
}

export default Axis

function AxisHorizontal ({ dimensions, label, scale, ...props }) {
  return (
    <g className="Axis AxisHorizontal" {...props}>
    </g>
  )
}

function AxisVertical ({ dimensions, label, scale, ...props }) {
  return (
    <g className="Axis AxisVertical" {...props}>
    </g>
  )
}

import React from 'react'

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        next
        </div>
  )
}


export default SampleNextArrow
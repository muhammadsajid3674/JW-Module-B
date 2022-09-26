import React from 'react'

function btn(props) {
  return (
    <button className={`btn ${props.classes}`}>{props.btnValue}</button>
  )
}

export default btn
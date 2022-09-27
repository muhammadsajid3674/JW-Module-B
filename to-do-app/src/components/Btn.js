import React from 'react'

function btn(props) {
  return (
    <button className={`btn ${props.classes}`} onClick={props.clickName}>{props.btnValue}</button>
  )
}

export default btn
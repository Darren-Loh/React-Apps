import React from 'react'

function Overview({tasks}) {
  return (
    <ul>
        {tasks.map((task) => {
            return <li>{task.text}</li>;
        })}
    </ul>
  )
}

export default Overview

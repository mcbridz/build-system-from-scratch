import React from 'react'
// import yo from 'yo-yo'
// const yo = require('yo-yo')

const Hello = function (props) {
  // return yo`<h1>Hello, ${name}!</h1>`
  return (
    <h1>Hello, {props.name}</h1>
  )
}

export default Hello

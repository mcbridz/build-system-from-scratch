// const Hello = require('./hello')
import React from 'react'
import ReactDOM from 'react-dom'
// import yo from 'yo-yo'
// const yo = require('yo-yo')
import Hello from './hello'


function App() {
    return (
        <div>
            <Hello name="Ben Bitdiddle" />
            {/* <h1>Hello, World</h1> */}
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app-container')
)
// const container = document.getElementById('app-container')

// const el = Hello("Ben Bitdiddle")

// mount component to the DOM
// container.appendChild(el)

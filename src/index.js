import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export const init = state => {
    console.log(state)
    ReactDOM.render(<App></App>, document.getElementById('root'))
}

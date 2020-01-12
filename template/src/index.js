import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from './store'
import App from './App'

export const init = state => {
    console.log(state)
    ReactDOM.render(
        <Provider value={state}>
            <App />
        </Provider>,
        document.getElementById('root'),
    )
}

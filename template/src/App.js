import React, { useContext } from 'react'
import { PlayerContext } from './context/player'

const App = () => {
    const player = useContext(PlayerContext)
    console.log(player)
    return (
        <div>
            <h1>Hello World</h1>
            
        </div>
    )
}

export default App

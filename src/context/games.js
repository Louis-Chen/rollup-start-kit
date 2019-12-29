import { createContext } from 'react'

const initState = {}

const GamesContext = createContext({state:{},dispatch:null})

export { GamesContext }

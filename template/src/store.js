import React from 'react'
import { PlayerContext } from './context/player'
import { GamesContext } from './context/games'
import { SectionContext } from './context/sections'
import { FavoriteContext } from './context/favorite'

export const Provider = ({ value, children }) => {
    return (
        <PlayerContext.Provider value={{ state: value.player, dispatch: null }}>
            <GamesContext.Provider
                value={{ state: value.games, dispatch: null }}
            >
                <SectionContext.Provider
                    value={{ state: value.section, dispatch: null }}
                >
                    <FavoriteContext.Provider
                        value={{ state: value.favorite, dispatch: null }}
                    >
                        {children}
                    </FavoriteContext.Provider>
                </SectionContext.Provider>
            </GamesContext.Provider>
        </PlayerContext.Provider>
    )
}

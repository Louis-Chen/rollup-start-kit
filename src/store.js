import React from 'react'
import { PlayerContext } from './context/player'
import { GamesContext } from './context/games'
import { SectionContext } from './context/sections'
import { FavoriteContext } from './context/favorite'

export const Provider = ({ value, children }) => {
    return (
        <PlayerContext.Provider value={value.player}>
            <GamesContext.Provider value={value.games}>
                <SectionContext.Provider value={value.section}>
                    <FavoriteContext.Provider value={value.favorite}>
                        {children}
                    </FavoriteContext.Provider>
                </SectionContext.Provider>
            </GamesContext.Provider>
        </PlayerContext.Provider>
    )
}

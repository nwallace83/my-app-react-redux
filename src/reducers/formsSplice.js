import { createSlice } from '@reduxjs/toolkit'

export const formsSlice = createSlice({
    name:'forms',
    initialState: {
        players: []
    },
    reducers: {
        loadPlayers: (state,players) => {
            return {...state, players: players.payload}
        },
        addPlayer: (state,player) => {
            return {players: [player.payload,...state.players]}
        },
        deletePlayer: (state,player) => {
            console.log('player')
            return {
                players: [...state.players.filter(item => item.playerName !== player.payload.playerName)]
            }

        }
    }
})

export const { loadPlayers, addPlayer, deletePlayer }  = formsSlice.actions

export default formsSlice.reducer


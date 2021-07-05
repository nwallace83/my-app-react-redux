import { createSlice } from '@reduxjs/toolkit'

export const formsSlice = createSlice({
    name:'forms',
    initialState: {
        players: [{name: "Kavion", class:"Demon Hunter"},{name:"Morelynn", class:"Mage"}]
    },
    reducers: {
        addPlayer: (state,player) => {
            return {players: [...state.players,player.payload]}
        }
    }
})

export const { addPlayer }  = formsSlice.actions

export default formsSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const formsSlice = createSlice({
    name:'forms',
    initialState: {
        players: [{name: "Kavion", class:"Demon Hunter"},{name:"Morelynn", class:"Mage"}]
    },
    reducers: {
        addPlayer: (state,player) => {
            return {players: [...state.players,player.payload]}
        },
        deletePlayer: (state,index) => {
            let newArray = [...state.players].slice()
            newArray.splice(index,1)
            return {
                players: newArray
            }
        }
    }
})

export const { addPlayer, deletePlayer }  = formsSlice.actions

export default formsSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const formsSlice = createSlice({
    name:'forms',
    initialState: {
        players: [
            {playerName:"Morelynn", playerClass:"Mage"},
            {playerName: "Kavion", playerClass:"Demon Hunter"},
            {playerName: "Askr", playerClass: "Warlock"},
            {playerName: "Evileternal", playerClass: "Hunter"},
            {playerName: "Laterr", playerClass: "Shaman"},
            {playerName: "Morelynn", playerClass: "Mage"},
            {playerName: "Phõenîx", playerClass: "Warlock"},
            {playerName: "Sadr", playerClass: "Mage"},
            {playerName: "Steams", playerClass: "Druid"},
            {playerName: "Xxwillow", playerClass: "Shaman"},
            {playerName: "Asariya", playerClass: "Rogue"},
            {playerName: "Chadra", playerClass: "Paladin"},
            {playerName: "Deprêssion", playerClass: "Monk"},
            {playerName: "Morelyn", playerClass: "Demon Hunter"},
            {playerName: "Navesauce", playerClass: "Demon Hunter"},
            {playerName: "Nghtpayne", playerClass: "Rogue"},
            {playerName: "Norivanddra", playerClass: "Death Knight"},
            {playerName: "Potató", playerClass: "Paladin"},
            {playerName: "Stealthpatch", playerClass: "Rogue"},
            {playerName: "Stuttùr", playerClass: "Warrior"},
            {playerName: "Voxsiph", playerClass: "Rogue"},
            {playerName: "Èvi", playerClass: "Monk"},
            {playerName: "Èvie", playerClass: "Shaman"},
    ]
    },
    reducers: {
        addPlayer: (state,player) => {
            return {players: [player.payload,...state.players]}
        },
        deletePlayer: (state,index) => {
            let newState = {...state,
                players: [...state.players]
            }
            newState.players.splice(index.payload,1)
            return newState;
        }
    }
})

export const { addPlayer, deletePlayer }  = formsSlice.actions

export default formsSlice.reducer


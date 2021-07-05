import { createSlice } from '@reduxjs/toolkit'

export const formsSlice = createSlice({
    name:'forms',
    initialState: {
        players: [
            {name: "Kavion", class:"Demon Hunter"},
            {name:"Morelynn", class:"Mage"},
            {name: "Askr", class: "Warlock"},
            {name: "Evileternal", class: "Hunter"},
            {name: "Laterr", class: "Shaman"},
            {name: "Morelynn", class: "Mage"},
            {name: "Phõenîx", class: "Warlock"},
            {name: "Sadr", class: "Mage"},
            {name: "Steams", class: "Druid"},
            {name: "Xxwillow", class: "Shaman"},
            {name: "Asariya", class: "Rogue"},
            {name: "Chadra", class: "Paladin"},
            {name: "Deprêssion", class: "Monk"},
            {name: "Morelyn", class: "Demon Hunter"},
            {name: "Navesauce", class: "Demon Hunter"},
            {name: "Nghtpayne", class: "Rogue"},
            {name: "Norivanddra", class: "Death Knight"},
            {name: "Potató", class: "Paladin"},
            {name: "Stealthpatch", class: "Rogue"},
            {name: "Stuttùr", class: "Warrior"},
            {name: "Voxsiph", class: "Rogue"},
            {name: "Èvi", class: "Monk"},
            {name: "Èvie", class: "Shaman"},
    ]
    },
    reducers: {
        addPlayer: (state,player) => {
            return {players: [player.payload,...state.players]}
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


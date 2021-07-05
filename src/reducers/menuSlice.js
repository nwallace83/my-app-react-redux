import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name:'menu',
    initialState: {
        activeTab: "forms",
    },
    reducers: {
        changeTab: (state,tab) => {
            return {activeTab: tab.payload}
        }
    }
})

export const { changeTab }  = menuSlice.actions

export default menuSlice.reducer
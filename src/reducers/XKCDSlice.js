import { createSlice } from '@reduxjs/toolkit'

export const XKCDSlice = createSlice({
    name:'XKCD',
    initialState: {
        comics: [],
    },
    reducers: {
        addComics: (state,comic) => {
            state.comics.push(comic.payload)
        },
        deleteAllComics: () => {
            return {comics: []}
        }
    }
})

export const { addComics, deleteAllComics }  = XKCDSlice.actions

export default XKCDSlice.reducer
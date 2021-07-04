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
        deleteComic: (state,comic) => {
            //let newArray = state.comics.slice()
            let newArray = [...state.comics]
            newArray.splice(comic.payload,1);
            return {comics: newArray}
        }
    }
})

export const { fetchComics, addComics, deleteComic }  = XKCDSlice.actions

export default XKCDSlice.reducer
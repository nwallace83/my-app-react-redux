import { configureStore } from '@reduxjs/toolkit'
import XKCDReducer from './reducers/XKCDSlice';
import menuReducer from './reducers/menuSlice'

export default configureStore({
    reducer: {
        XKCD: XKCDReducer,
        menu: menuReducer
    }
})
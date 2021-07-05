import { configureStore } from '@reduxjs/toolkit'
import XKCDReducer from './reducers/XKCDSlice';
import menuReducer from './reducers/menuSlice'
import formsSlice from './reducers/formsSplice'

export default configureStore({
    reducer: {
        XKCD: XKCDReducer,
        menu: menuReducer,
        forms: formsSlice,
    }
})
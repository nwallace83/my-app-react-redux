import { configureStore } from '@reduxjs/toolkit'
import XKCDReducer from './reducers/XKCDSlice';
import menuReducer from './reducers/menuSlice'
import formsSlice from './reducers/formsSplice'
import sessionSlice from './reducers/sessionSlice'

export default configureStore({
    reducer: {
        XKCD: XKCDReducer,
        menu: menuReducer,
        forms: formsSlice,
        session: sessionSlice,
    }
})
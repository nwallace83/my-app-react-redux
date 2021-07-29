import { createSlice } from '@reduxjs/toolkit'
const jwt = require('jsonwebtoken')

export const sessionSlice = createSlice({
    name:'session',
    initialState: {
        sessionToken: "",
        userName:"",
        role: ""
    },
    reducers: {
        setSession: (state,session) => {
            const decodedWebToken = jwt.decode(session.payload)
            return {...state,
                sessionToken: session.payload,
                userName: decodedWebToken.userName,
                role: decodedWebToken.role,
            }
        },
        clearSession:(state) => {
            return{...state,sessionToken:"", userName:"",role:""}
        }
    }
})

export const { setSession, clearSession }  = sessionSlice.actions

export default sessionSlice.reducer
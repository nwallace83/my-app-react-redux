import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
    name:'session',
    initialState: {
        sessionToken: "",
        userName:"",
        role: ""
    },
    reducers: {
        setSession: (state,session) => {
            return {...state,
                sessionToken: session.payload.sessionToken,
                userName: session.payload.userName,
                role: session.payload.role,
            }
        },
        clearSession:(state) => {
            return{...state,sessionToken:"", userName:"",role:""}
        }
    }
})

export const { setSession, clearSession }  = sessionSlice.actions

export default sessionSlice.reducer
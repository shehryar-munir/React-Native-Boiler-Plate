import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            username: 'burakbinmunir',
            password: 'burak'
        },
        {
            username: 'alihamza',
            password: 'alihamza'
        }
    ]
}

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, payload) => {
            state.data.push(payload)
        }
    }
})

export const { addNewUser} = slice.actions
export default slice.reducer
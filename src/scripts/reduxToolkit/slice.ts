import { createSlice } from '@reduxjs/toolkit';

// Define a initial state
const initialState = {
    id: 1,
    token: 'No token',
    userFirstname: 'undefined',
    userName: 'undefined',
    email: 'undefined',
    connected: false
};

export const sliceUser = createSlice({
    name: 'user',
    initialState,
    reducers: {
        update: (state, action) => {
            state.token = action.payload.token.body.token;
            state.userFirstname = action.payload.userInformations.body.firstName
            state.userName = action.payload.userInformations.body.lastName
            state.email = action.payload.userInformations.body.email
            state.connected = !state.connected
        },

        updateInfoUser: (state, action) => {
            state.userFirstname = action.payload.body.firstName;
            state.userName = action.payload.body.lastName;
        }
    }
});

// Actions exported for dispatch using
export const { update, updateInfoUser } = sliceUser.actions;

// Reducer exported
export default sliceUser.reducer;
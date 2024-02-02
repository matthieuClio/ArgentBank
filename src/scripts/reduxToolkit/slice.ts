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
        // Stock user informations
        update: (state, action) => {
            state.token = action.payload.token.body.token;
            state.userFirstname = action.payload.userInformations.body.firstName
            state.userName = action.payload.userInformations.body.lastName
            state.email = action.payload.userInformations.body.email
            state.connected = !state.connected
        },

        // Update userFirstname and userName
        updateInfoUser: (state, action) => {
            state.userFirstname = action.payload.body.firstName;
            state.userName = action.payload.body.lastName;
        },

        // Store Reset 
        reset: (state) => {
            state = initialState;
            return state;
        }
    }
});

// Actions exported for dispatch using
export const { update, updateInfoUser, reset } = sliceUser.actions;

// Reducer exported
export default sliceUser.reducer;
import { createSlice } from '@reduxjs/toolkit'; // ✅ Correct



const initialState = {
    activeUser: false,
    userName: 'raju@123',
    phonenumber: '0000000000',
    fullname: 'Rajesh',
    dateOfBirth: '02.02.1999',
    
    messages: [{type: '', sender: ''}]
}

const AuthSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.activeUser = true;
            state.userName = action.payload.userName;
            state.phonenumber = action.payload.phonenumber;
            state.fullname = action.payload.fullname;
            state.dateOfBirth = action.payload.dateOfBirth;
        },

        clearActiveUser: (state) => {
            state.activeUser = false;
            state.userName = '';
            state.phonenumber = '';
            state.fullname = '';
            state.dateOfBirth = '';
        },  

        setMessages: (state, action) => {
            state.messages = action.payload.messages;
        },
        clearMessages: (state) => {
            state.messages = [];
        }
    }



})

export const {setActiveUser, setMessages, clearMessages , clearActiveUser} =  AuthSlice.actions;

export default AuthSlice.reducer; 

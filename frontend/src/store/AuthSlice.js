import { createSlice } from '@reduxjs/toolkit'; // ✅ Correct



const initialState = {
    activeUser: false,
    userName: 'raju@123',
    phonenumber: '0000000000',
    fullname: 'Rajesh',
    dateOfBirth: '02.02.1999',
    otp: '',
    messages: [{type: '', sender: ''}]
}

const AuthSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload?.userName || state.userName;
            state.phonenumber = action.payload?.phonenumber || state.phonenumber;
            state.fullname = action.payload?.fullname || state.fullname;
            state.dateOfBirth = action.payload?.dateOfBirth || state.dateOfBirth;
            state.activeUser = true;
        },
        setOtp: (state, action) => {
            state.otp = action.payload?.otp || state.otp;
        },
        clearOtp: (state) => {
            state.otp = '';
        },
        clearActiveUser: (state) => {
           return  Object.assign(state, initialState);
        },
        
        setMessages: (state, action) => {
            state.messages = action.payload?.messages || []; 
        },
        clearMessages: (state) => {
            state.messages = [];
        }
    }



})

export const {setActiveUser, setMessages, clearMessages, setOtp , clearOtp , clearActiveUser} =  AuthSlice.actions;

export default AuthSlice.reducer; 

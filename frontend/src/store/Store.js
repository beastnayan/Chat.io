import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './AuthSlice'; // ✅ Correct

const store = configureStore({
    reducer: {
       auth: AuthReducer
    }
})


export default store; // ✅ Correct



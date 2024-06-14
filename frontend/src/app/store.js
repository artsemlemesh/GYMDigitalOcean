import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import postsReducer from '../features/posts/postsSlice'
import scheduleReducer from '../features/schedule/scheduleSlice'


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReducer,
        schedule: scheduleReducer,

    }
})


export default store
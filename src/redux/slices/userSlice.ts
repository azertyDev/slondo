import {createSlice} from '@reduxjs/toolkit';
import {UserInfo} from '@root/interfaces/Auth';

type UserStateType = {
    isAuth: boolean;
    isAuthModalOpen: boolean;
    info: UserInfo
}

const initialState: UserStateType = {
    isAuth: false,
    isAuthModalOpen: false,
    info: {
        id: null,
        name: '',
        surname: '',
        phone: '',
        avatar: '',
        created_at: '',
        available_days: '',
        available_start_time: '',
        available_end_time: '',
        observer: {
            number_of_reviews: 0,
            number_of_purchase: 0,
            number_of_notifications: 0,
            number_of_messages: 0,
            number_of_ratings: 0
        }
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInAction: (state, action) => {
            state.isAuth = true;
            state.info = action.payload;
        },
        signOutAction: () => {
            return {...initialState};
        },
        setIsAuthModalOpen: (state, action) => {
            state.isAuthModalOpen = action.payload;
        }
    }
});

export const {signInAction, signOutAction, setIsAuthModalOpen} = userSlice.actions;
export const userReducer = userSlice.reducer;
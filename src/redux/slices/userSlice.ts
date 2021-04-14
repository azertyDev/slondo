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
        available_days: ''
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
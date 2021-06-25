import {createSlice} from '@reduxjs/toolkit';

type UserCardType = {
    cardName: string,
    owner: string,
    balance: number,
    cardId: number,
    expireDate: number,
    number: number
}

const initialState: UserCardType = {
    cardName: '',
    owner: '',
    balance: 0,
    cardId: null,
    expireDate: null,
    number: null
};

const userCardSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserCardAction: (state, action) => action.payload,
        resetUserCardAction: () => initialState
    }
});

export const {setUserCardAction, resetUserCardAction} = userCardSlice.actions;
export const userCardReducer = userCardSlice.reducer;
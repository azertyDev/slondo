import {createSlice} from '@reduxjs/toolkit';

type UserCardType = {
    id: number,
    cardId: number,
    cardName: string,
    owner: string,
    balance: number,
    expireDate: number,
    number: number
}

const initialState: UserCardType = {
    id: null,
    cardId: null,
    cardName: '',
    owner: '',
    balance: 0,
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
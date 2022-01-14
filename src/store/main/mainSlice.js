import {createSlice} from '@reduxjs/toolkit';

export const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        gamesData: {},
        status: 'idle',
    },
    reducers: {
        getGames(state, action) {
            state.gamesData = action.payload;
            state.status = 'loading';
        },
        getGamesSuccess(state, action) {
            state.status = 'success';
            state.gamesData = action.payload;
        },
        getGamesError(state, action) {
            state.status = 'error';
            console.log(action.payload);
        },
    },
});

export const {
    getGames,
    getGamesSuccess,
    getGamesError,
} = gamesSlice.actions;



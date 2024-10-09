import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MovieSchema} from '../types/movie';
import {MOVIES_PER_PAGE} from '../../../../shared/config/common';

import moviesMock from '../../mock/moviesMock.json';

type MovieObjTypes = {
    list: Array<MovieSchema>;
    isLoading: boolean;
    isMore: boolean;
    page: number;
};

type InitialStateTypes = {
    home: MovieObjTypes;
    favorite: MovieObjTypes;
    booked: MovieObjTypes;
    favoriteIds: Array<number>;
    bookedIds: Array<number>;
};

export const initialState: InitialStateTypes = {
    favoriteIds: [],
    bookedIds: [],
    home: {list: [], page: 0, isLoading: true, isMore: true},
    favorite: {list: [], page: 0, isLoading: true, isMore: true},
    booked: {list: [], page: 0, isLoading: true, isMore: true},
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        loadMoreListMovies: state => {
            const {page} = state.home;
            const nextMovies = moviesMock.slice(
                page * MOVIES_PER_PAGE,
                (page + 1) * MOVIES_PER_PAGE,
            );

            if (nextMovies.length === 0) {
                state.home.isMore = false;
            } else {
                state.home.list = [...state.home.list, ...nextMovies];
                state.home.page += 1;
            }
        },
        loadMoreFavoriteMovies: (state, action: PayloadAction<any>) => {
            if (action?.payload?.isRefresh) {
                state.favorite.page = 0;
                state.favorite.list = [];
            }
            const {page} = state.favorite;
            const nextMovies = moviesMock
                .filter(ele => state.favoriteIds?.includes(ele.id))
                .slice(page * MOVIES_PER_PAGE, (page + 1) * MOVIES_PER_PAGE);
            if (nextMovies.length === 0) {
                state.favorite.isMore = false;
            } else {
                state.favorite.list = [...state.favorite.list, ...nextMovies];
                state.favorite.page += 1;
            }
        },
        loadMoreBookedMovies: (state, action) => {
            if (action?.payload?.isRefresh) {
                state.booked.page = 0;
                state.booked.list = [];
            }
            const {page} = state.booked;
            const nextMovies = moviesMock
                .filter(ele => state.bookedIds?.includes(ele.id))
                .slice(page * MOVIES_PER_PAGE, (page + 1) * MOVIES_PER_PAGE);
            if (nextMovies.length === 0) {
                state.booked.isMore = false;
            } else {
                state.booked.list = [...state.booked.list, ...nextMovies];
                state.booked.page += 1;
            }
        },
        addFavoriteMovie: (state, action) => {
            state.favoriteIds = [action.payload, ...state.favoriteIds];
        },
        removeFavoriteMovie: (state, action) => {
            state.favoriteIds = state.favoriteIds.filter(
                ele => ele !== action.payload,
            );
        },
        bookMovie: (state, action) => {
            state.bookedIds = [action.payload, ...state.bookedIds];
        },
    },
});

export const {
    addFavoriteMovie,
    removeFavoriteMovie,
    bookMovie,
    loadMoreListMovies,
    loadMoreFavoriteMovies,
    loadMoreBookedMovies,
} = movieSlice.actions;
export const movieReducer = movieSlice.reducer;

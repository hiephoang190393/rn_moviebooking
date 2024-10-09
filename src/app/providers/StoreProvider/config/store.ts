import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {movieReducer} from '../../../../entities/movie/model/slices/movieSlice';

export const rootReducer = combineReducers({movie: movieReducer});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {},
        }),
});

export type RootState = ReturnType<typeof store.getState>;

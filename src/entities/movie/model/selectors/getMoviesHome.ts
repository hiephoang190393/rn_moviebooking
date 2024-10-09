import {RootState} from '../../../../app/providers/StoreProvider';

export const getMoviesHome = (state: RootState) => state.movie.home;

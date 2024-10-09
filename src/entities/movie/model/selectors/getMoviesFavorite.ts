import {RootState} from '../../../../app/providers/StoreProvider';

export const getMoviesFavorite = (state: RootState) => state.movie.favorite;

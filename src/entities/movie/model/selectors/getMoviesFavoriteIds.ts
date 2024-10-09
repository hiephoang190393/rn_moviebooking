import {RootState} from '../../../../app/providers/StoreProvider';

export const getMoviesFavoriteIds = (state: RootState) => state.movie.favoriteIds;

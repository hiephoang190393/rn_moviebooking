import {RootState} from '../../../../app/providers/StoreProvider';

export const getMoviesBookedIds = (state: RootState) => state.movie.bookedIds;

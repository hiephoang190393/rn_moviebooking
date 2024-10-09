import {RootState} from '../../../../app/providers/StoreProvider';

export const getMoviesBooked = (state: RootState) => state.movie.booked;

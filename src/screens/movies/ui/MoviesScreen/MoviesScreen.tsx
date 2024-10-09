import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import {useDispatch, useSelector} from 'react-redux';

import {TabNavigation} from '../../../../shared/config/navigation';
import {MovieItem} from '../MovieItem/MovieItem';

import {getMoviesHome} from '../../../../entities/movie/model/selectors/getMoviesHome';
import {
    addFavoriteMovie,
    loadMoreListMovies,
    removeFavoriteMovie,
} from '../../../../entities/movie/model/slices/movieSlice';
import {getMoviesFavoriteIds} from '../../../../entities/movie/model/selectors/getMoviesFavoriteIds';
import {getMoviesBookedIds} from '../../../../entities/movie/model/selectors/getMoviesBookedIds';

import {styles} from './MoviesScreenStyle';

type MoviesScreenProps = NativeStackScreenProps<any, TabNavigation.MOVIES>;

export const MoviesScreen = ({}: MoviesScreenProps) => {
    const dispatch = useDispatch();
    const {list, isMore} = useSelector(getMoviesHome);
    const favoriteIds = useSelector(getMoviesFavoriteIds);
    const bookedIds = useSelector(getMoviesBookedIds);

    useEffect(() => {
        dispatch(loadMoreListMovies());
    }, []);

    const onEndReached = useCallback(() => {
        if (isMore) {
            dispatch(loadMoreListMovies());
        }
    }, []);

    const renderItem = useCallback(
        ({item}: any) => {
            return (
                <MovieItem
                    isFavorite={favoriteIds.includes(item.id)}
                    isBooked={bookedIds.includes(item.id)}
                    item={item}
                />
            );
        },
        [favoriteIds, bookedIds],
    );

    const keyExtractor = useCallback((item: any) => {
        return item.id;
    }, []);

    return (
        <View style={styles.container}>
            <FlashList
                estimatedItemSize={140}
                data={list}
                disableAutoLayout={true}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.04}
                extraData={[favoriteIds, bookedIds]}
            />
        </View>
    );
};

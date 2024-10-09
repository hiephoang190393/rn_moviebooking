import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import {useDispatch, useSelector} from 'react-redux';

import { MovieInfo } from '../../../../shared/ui/MovieInfo/MovieInfo';

import {getMoviesBooked} from '../../../../entities/movie/model/selectors/getMoviesBooked';
import {loadMoreBookedMovies} from '../../../../entities/movie/model/slices/movieSlice';

import {styles} from './MoviesBookedScreenStyle';

export const MoviesBookedScreen = ({}) => {
    const dispatch = useDispatch();
    const {list, isMore} = useSelector(getMoviesBooked);

    useFocusEffect(
        useCallback(() => {
            dispatch(loadMoreBookedMovies({isRefresh: true}));
        }, []),
    );

    const onEndReached = useCallback(() => {
        if (isMore) {
            dispatch(loadMoreBookedMovies({}));
        }
    }, []);

    const renderItem = useCallback(({item}: any) => {
        return <MovieInfo item={item} />;
    }, []);

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
                onEndReachedThreshold={0.04}
                contentContainerStyle={styles.list}
                onEndReached={onEndReached}
            />
        </View>
    );
};

import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';

import { MovieInfo } from '../../../../shared/ui/MovieInfo/MovieInfo';

import {useDispatch, useSelector} from 'react-redux';
import {getMoviesFavorite} from '../../../../entities/movie/model/selectors/getMoviesFavorite';
import {loadMoreFavoriteMovies} from '../../../../entities/movie/model/slices/movieSlice';

import {styles} from './MoviesFavoriteScreenStyle';

export const MoviesFavoriteScreen = ({}) => {
    const dispatch = useDispatch();
    const {list, isMore} = useSelector(getMoviesFavorite);

    useFocusEffect(
        useCallback(() => {
            dispatch(loadMoreFavoriteMovies({isRefresh: true}));
        }, []),
    );

    const onEndReached = useCallback(() => {
        if (isMore) {
            dispatch(loadMoreFavoriteMovies({}));
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
                contentContainerStyle={styles.list}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.04}
                estimatedFirstItemOffset={10}
            />
        </View>
    );
};

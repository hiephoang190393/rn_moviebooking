import React, {memo} from 'react';
import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {AppNavigation} from '../../../../shared/config/navigation';
import {Thumbnail} from '../../../../shared/components/Thumbnail/Thumbnail';
import {MovieMetaData} from '../../../../shared/ui/MovieMetaData/MovieMetaData';
import {CustomButton} from '../../../../shared/components/CustomButton/CustomButton';

import {styles} from './MovieItemStyle';
import {LineSeparator} from '../../../../shared/components/LineSeparator/LineSeparator';
import {MovieFavorite} from '../../../../features/movie/favorite/ui/MovieFavorite/MovieFavorite';
import {MovieInfo} from '../../../../shared/ui/MovieInfo/MovieInfo';

type MovieItemProps = {
    item: any | never;
    isFavorite?: boolean;
    isBooked?: boolean;
    hideBooking?: boolean;
    hideFavorite?: boolean;
};

export const MovieItem = memo(
    ({item, isFavorite, isBooked}: MovieItemProps) => {
        const navigation = useNavigation<NavigationProp<any>>();

        const onBooking = () => {
            navigation.navigate(AppNavigation.MOVIE_BOOKING, {item});
        };

        return (
            <MovieInfo item={item}>
                <View style={styles.row}>
                    <MovieFavorite id={item.id} isFavorite={isFavorite} />
                    <CustomButton
                        name={isBooked ? 'Đã Đặt' : 'Đặt Vé'}
                        borderColor="#2E2020"
                        color="#2E2020"
                        borderWidth={1}
                        disabled={isBooked}
                        onPress={onBooking}
                    />
                </View>
            </MovieInfo>
        );
    },
);

import React from 'react';
import {ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppNavigation} from '../../../../shared/config/navigation';
import {Thumbnail} from '../../../../shared/components/Thumbnail/Thumbnail';
import {MovieBooking} from '../../../../features/movie/booking/ui/MovieBooking/MovieBooking';

import {
    CustomText,
    TextSize,
    TextWeight,
} from '../../../../shared/components/CustomText/CustomText';

import {styles} from './MovieBookingScreenStyle';

type MovieBookingScreenProps = NativeStackScreenProps<
    any,
    AppNavigation.MOVIE_BOOKING
>;

export const MovieBookingScreen = ({route}: MovieBookingScreenProps) => {
    const {thumbnail, title, id, description} = route?.params?.item;

    return (
        <>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.container}>
                <Thumbnail uri={thumbnail} />
                <CustomText
                    style={styles.title}
                    weight={TextWeight.BOLD}
                    size={TextSize.S_2XL}>
                    {title}
                </CustomText>
                <CustomText style={styles.desc}>{description}</CustomText>
            </ScrollView>
            <MovieBooking id={id} />
        </>
    );
};

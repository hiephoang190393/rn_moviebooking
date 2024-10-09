import React from 'react';
import {useDispatch} from 'react-redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {TabNavigation} from '../../../../../shared/config/navigation';
import {CustomButton} from '../../../../../shared/components/CustomButton/CustomButton';
import {
    TextSize,
    TextWeight,
} from '../../../../../shared/components/CustomText/CustomText';
import {bookMovie} from '../../../../../entities/movie/model/slices/movieSlice';

import {styles} from './MovieBookingStyle';

type MovieBookingProps = {
    id: number;
};

export const MovieBooking = ({id}: MovieBookingProps) => {
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp<any>>();

    const onBooking = () => {
        dispatch(bookMovie(id));
        navigation.navigate(TabNavigation.MOVIES_BOOKED);
    };

    return (
        <CustomButton
            testID='bookingButton'
            style={styles.button}
            textSize={TextSize.S_XL}
            textWeight={TextWeight.BOLD}
            borderWidth={1}
            name="Đặt vé"
            color="#fff"
            onPress={onBooking}
        />
    );
};

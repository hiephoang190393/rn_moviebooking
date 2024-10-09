import React, {memo} from 'react';
import {useDispatch} from 'react-redux';

import {
    addFavoriteMovie,
    removeFavoriteMovie,
} from '../../../../../entities/movie/model/slices/movieSlice';
import {CustomButton} from '../../../../../shared/components/CustomButton/CustomButton';

type MovieFavoriteProps = {
    id: number;
    isFavorite?: boolean;
};

export const MovieFavorite = memo(({id, isFavorite}: MovieFavoriteProps) => {
    const dispatch = useDispatch();

    const onFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavoriteMovie(id));
        } else {
            dispatch(addFavoriteMovie(id));
        }
    };

    return (
        <CustomButton
            name={isFavorite ? 'Đã thích' : 'Yêu Thích'}
            onPress={onFavorite}
            borderColor={isFavorite ? 'red' : '#2E2020'}
            color={isFavorite ? '#fff' : '#2E2020'}
            borderWidth={1}
            backgroundColor={isFavorite ? 'red' : '#fff'}
        />
    );
});

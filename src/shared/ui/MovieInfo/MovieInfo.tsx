import React, {Children, memo} from 'react';
import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {
    CustomText,
    TextSize,
    TextWeight,
} from '../../components/CustomText/CustomText';
import {Thumbnail} from '../../components/Thumbnail/Thumbnail';
import {CustomButton} from '../../components/CustomButton/CustomButton';
import {AppNavigation} from '../../config/navigation';

import {styles} from './MovieInfoStyle';
import {LineSeparator} from '../../components/LineSeparator/LineSeparator';
import {MovieMetaData} from '../MovieMetaData/MovieMetaData';

type MovieInfoProps = {
    item: any | never;
    children?: React.ReactNode;
};

export const MovieInfo = memo(({item, children}: MovieInfoProps) => {
    return (
        <>
            <View style={styles.container}>
                <Thumbnail uri={item.thumbnail} />
                <View style={styles.col}>
                    <MovieMetaData
                        title={item.title}
                        description={item.description}
                    />
                    {children}
                </View>
            </View>
            <LineSeparator />
        </>
    );
});

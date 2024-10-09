import React, {memo} from 'react';
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

import {styles} from './MovieMetaDataStyle';
import {LineSeparator} from '../../components/LineSeparator/LineSeparator';

type MovieMetaDataProps = {
    title: string;
    description: string;
};

export const MovieMetaData = memo(
    ({title, description}: MovieMetaDataProps) => {
        return (
            <View>
                <CustomText numberOfLines={1} weight={TextWeight.BOLD}>
                    {title}
                </CustomText>
                <CustomText
                    style={styles.description}
                    size={TextSize.S_BASE}
                    numberOfLines={3}>
                    {description}
                </CustomText>
            </View>
        );
    },
);

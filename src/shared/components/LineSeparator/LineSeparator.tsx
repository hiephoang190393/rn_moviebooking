import React from 'react';
import {View} from 'react-native';
import {styles} from './LineSeparatorStyle';

type LineSeparatorProps = {
    height?: number;
    backgroundColor?: string;
};

export const LineSeparator = React.memo((props: LineSeparatorProps) => {
    const {height = 1, backgroundColor = '#9a9a9a', ...rest} = props;
    return (
        <View style={[styles.container, {height, backgroundColor}]} {...rest} />
    );
});

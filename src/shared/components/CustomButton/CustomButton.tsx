import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {CustomText, TextSize, TextWeight} from '../CustomText/CustomText';
import {styles} from './CustomButtonStyle';

type CustomButtonProps = TouchableOpacityProps & {
    backgroundColor?: string;
    color?: string;
    radius?: number;
    borderColor?: string;
    borderWidth?: number;
    name: string;
    textSize?: any;
    textWeight?: any;
    testID?: string;
    disabled?: boolean;
    onPress: Function;
};

export const CustomButton = (props: CustomButtonProps) => {
    const {
        disabled = false,
        color = '#000',
        radius = 6,
        borderColor = 'transparent',
        borderWidth = 0,
        onPress,
        backgroundColor,
        textSize = TextSize.S_SM,
        name,
        testID,
        style,
        textWeight = TextWeight.NORMAL,
        ...rest
    } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            testID={testID}
            style={[
                styles.container,
                {
                    borderRadius: radius,
                    borderColor,
                    backgroundColor,
                    borderWidth,
                },
                disabled && styles.disabled,
                style,
            ]}
            {...rest}>
            <CustomText
                weight={textWeight}
                size={textSize}
                style={[styles.text, {color}]}>
                {name}
            </CustomText>
        </TouchableOpacity>
    );
};

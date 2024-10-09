import React from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './CustomTextStyle';

type CustomTextType = TextProps & {
  children: React.ReactNode;
  size?: TextSize;
  weight?: TextWeight;
};

export enum TextSize {
  S_XS = 'size_xs',
  S_SM = 'size_sm',
  S_BASE = 'size_base',
  S_LG = 'size_lg',
  S_XL = 'size_xl',
  S_2XL = 'size_2xl',
}

export enum TextWeight {
  NORMAL = 'font_normal',
  BOLD = 'font_bold',
}

export const CustomText = (props: CustomTextType) => {
  const {
    children,
    size = TextSize.S_XL,
    weight = TextWeight.NORMAL,
    style,
    ...res
  } = props;

  return (
    <Text
      style={[
        styles.text,
        styles[size],
        styles[weight],
        style,
      ]}
      {...res}>
      {children}
    </Text>
  );
};

import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './ThumbnailStyle';

type ThumbnailProps = {
    uri?: string;
};

export const Thumbnail = React.memo((props: ThumbnailProps) => {
    const {uri} = props;

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri,
                }}
                resizeMode={'cover'}
            />
        </View>
    );
});

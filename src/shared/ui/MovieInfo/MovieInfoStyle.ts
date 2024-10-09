import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 16,
    },
    description: {
        marginTop: 5,
    },
    col: {
        flex: 1,
        marginLeft: 8,
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 0,
        gap: 8,
    },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StoreProvider } from './providers/StoreProvider';
import React from 'react';
import AppNavigator from './navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
    return (
        <SafeAreaProvider>
            <StoreProvider>
                <AppNavigator />
            </StoreProvider>
        </SafeAreaProvider>
    );
}

export default App;

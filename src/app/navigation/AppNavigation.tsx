import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigation, TabNavigation} from '../../shared/config/navigation';
import {MoviesScreen} from '../../screens/movies/ui/MoviesScreen/MoviesScreen';
import {MovieBookingScreen} from '../../screens/movie-booking/ui/MovieBookingScreen/MovieBookingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MoviesFavoriteScreen} from '../../screens/movies-favorite/ui/MoviesFavoriteScreen/MoviesFavoriteScreen';
import {MoviesBookedScreen} from '../../screens/movies-booked/ui/MoviesBookedScreen/MoviesBookedScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarIconStyle: {display: 'none'},
            tabBarLabelPosition: 'beside-icon',
        }}>
        <Tab.Screen
            name={TabNavigation.MOVIES}
            options={{title: 'Danh sách phim'}}
            component={MoviesScreen}
        />
        <Tab.Screen
            name={TabNavigation.MOVIES_FAVORITE}
            options={{title: 'Phim đã thích'}}
            component={MoviesFavoriteScreen}
        />
        <Tab.Screen
            name={TabNavigation.MOVIES_BOOKED}
            options={{title: 'Phim đã đặt'}}
            component={MoviesBookedScreen}
        />
    </Tab.Navigator>
);

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={AppNavigation.TAB_NAVIGATOR}
                    options={{headerShown: false}}
                    component={TabNavigator}
                />
                <Stack.Screen
                    name={AppNavigation.MOVIE_BOOKING}
                    options={{
                        headerTransparent: false,
                        headerBackTitleVisible: false,
                        title: "Đặt vé"
                    }}
                    component={MovieBookingScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

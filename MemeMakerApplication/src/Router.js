import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './Pages/Home';
import Detail from './Pages/Detail';

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Detail'
                    component={Detail}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
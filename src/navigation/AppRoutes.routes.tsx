import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { forest_hunt } from '../../assets'

import { LoginScreen, HomeScreen, OptionsScreen, MaleProducts, FemaleProducts } from '../screens'
import { navigationRef } from './MyStackNavigator';
import { ProductScreen } from '../screens/ProductScreen/ProductScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Button = createBottomTabNavigator();

function MaterialTopTabs() {
    return (

        <Tab.Navigator>

            <Tab.Screen
                name='main'
                component={HomeScreen}
                options={{ title: "Todos" }} />

            <Tab.Screen
                name='male'
                component={MaleProducts}
                options={{ title: "Masculinos" }} />

            <Tab.Screen
                name='female'
                component={FemaleProducts}
                options={{ title: "Femininos" }} />

        </Tab.Navigator>

    )
}

export function ButtonTabs() {
    return (
        <Button.Navigator>
            <Button.Screen
                name='home'
                component={MaterialTopTabs}
                options={{
                    title: "Home Screen",
                    headerTintColor: forest_hunt.bege_fundo,
                    headerStyle: {
                        backgroundColor: forest_hunt.verde_claro,
                    },


                }} />

            <Button.Screen
                name='options'
                component={OptionsScreen}
                options={{
                    title: "Options",
                    headerTintColor: forest_hunt.bege_fundo,
                    headerStyle: {
                        backgroundColor: forest_hunt.verde_claro,
                    },
                }} />

        </Button.Navigator>
    )
}

export function Routes() {
    return (
        <NavigationContainer
            ref={navigationRef}>


            <Stack.Navigator>

                <Stack.Screen
                    name='login'
                    component={LoginScreen}
                    options={{ headerShown: false }} />


                <Stack.Screen
                    name='app'
                    component={ButtonTabs}
                    options={{ headerShown: false }} />

                <Stack.Screen
                    name='product'
                    component={ProductScreen}
                    options={{
                        title: 'Detalhes do Produto',
                        headerTintColor: forest_hunt.bege_fundo,
                        headerStyle: {
                            backgroundColor: forest_hunt.verde_claro,
                        },
                    }} />

            </Stack.Navigator>


        </NavigationContainer>
    )

}
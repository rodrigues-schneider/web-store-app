import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { forest_hunt } from '../../assets';
import { TabsConfig } from './TabsConfig';

import { LoginScreen, OptionsScreen, ModelScreen } from '../screens'
import { navigationRef } from './MyStackNavigator';
import { ProductScreen } from '../screens/ProductScreen/ProductScreen';
import { Entypo } from '@react-native-vector-icons/entypo';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Button = createBottomTabNavigator();


function MaterialTopTabs() {
    const route = useRoute<any>();
    const isSubtab = route.params?.isSubtab;

    const tabsToRender = route.params?.subTabs || TabsConfig;


    return (

        <Tab.Navigator
            screenOptions={{
                tabBarScrollEnabled: true,
                swipeEnabled: isSubtab ? true : false,

                tabBarIndicatorStyle: { backgroundColor: forest_hunt.verde_claro },

                tabBarItemStyle: {
                    width: isSubtab ? 100 : 131,
                },

                tabBarLabelStyle: {
                    fontSize: isSubtab ? 12 : 15,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                },

                tabBarActiveTintColor: forest_hunt.verde_claro,

                tabBarInactiveTintColor: forest_hunt.bege,

                tabBarStyle: {
                    backgroundColor: forest_hunt.bege_fundo,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                }

            }}
        >

            {tabsToRender.map((tab: any) => (
                <Tab.Screen
                    key={tab.route}
                    name={tab.route}
                    component={tab.subTabs ? MaterialTopTabs : ModelScreen}
                    options={{ tabBarLabel: tab.label }}
                    initialParams={
                        tab.subTabs
                            ? { subTabs: tab.subTabs, isSubtab: true }
                            : tab
                    }
                />
            ))}


        </Tab.Navigator>

    )
}

export function ButtonTabs() {
    return (
        <Button.Navigator
            screenOptions={{
                tabBarActiveTintColor: forest_hunt.verde_escuro, // Cor do ícone quando selecionado
                tabBarInactiveTintColor: '#888888',              // Cor do ícone inativo
            }}>
            <Button.Screen
                name='home'
                component={MaterialTopTabs}
                options={{
                    title: "Home",
                    headerTintColor: forest_hunt.bege_fundo,
                    headerStyle: {
                        backgroundColor: forest_hunt.verde_claro,
                    },

                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name="home"
                            size={24}
                            color={focused ? forest_hunt.verde_escuro : '#888888'}
                        />
                    )

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

                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name="cog"
                            size={24}
                            color={focused ? forest_hunt.verde_escuro : '#888888'}
                
                        />
                    )
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
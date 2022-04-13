import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Home/home.component';
import { ParametreScreen } from '../Parametres/parametres.component';
import { InfosScreen } from '../Infos/infos.component';
import { CarteScreen } from '../Carte/carte.component';
import { PaysScreen } from '../Pays/pays.component';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Parametres' component={ParametreScreen}/>
    <Screen name='Infos' component={InfosScreen}/>
    <Screen name='Carte' component={CarteScreen}/>
    <Screen name='Pays' component={PaysScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
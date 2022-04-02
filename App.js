import React from 'react';
import {StatusBar} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './components/navigation/navigation.component';
import 'react-native-gesture-handler';

//je modif

/**
 * @description
 * IconRegistry : préchargement des icons eva
 * ApplicationProvider : Provider de kitten
 * AppNavigator : le navigateur de kitten (entre les pages du dossier components)
 */
export default function App() {
    return (
        <>
            <StatusBar
                translucent={false}
                barStyle="dark-content"
                backgroundColor="orange"
            // Pour utiliser la couleur du bg : theme["background-basic-color-1"]
            />
            <IconRegistry icons={EvaIconsPack} />
            {/* TODO dark/lighe Mode (AppProvider) */}
            <ApplicationProvider {...eva} theme={eva.dark}>
                <AppNavigator />
            </ApplicationProvider>
        </>
    );
}
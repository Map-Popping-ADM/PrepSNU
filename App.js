import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './components/navigation/navigation.component';

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
            {/* TODO créer un variable pour changer le thème */}
            <ApplicationProvider {...eva} theme={eva.dark}>
                <AppNavigator />
            </ApplicationProvider>
        </>
    );
}
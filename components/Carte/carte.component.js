import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, Divider, Layout, TopNavigation, TopNavigationAction, Icon, Card } from '@ui-kitten/components';
import { MenuItem, OverflowMenu } from '@ui-kitten/components';

const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical' />
);
const Parametre = (props) => (
    <Icon {...props} name='settings-2-outline' />
);
const Info = (props) => (
    <Icon {...props} name='info-outline' />
);

export const CarteScreen = ({ navigation }) => {

    //TODO: Quelqu'un peut exporter l'action de droite dans un autre fichier ? (sachant que on doit prendre en arguments navigation)
    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    );

    const navigateParametres = () => (
        navigation.navigate('Parametres')
    );
    const navigateInfos = () => (
        navigation.navigate('Infos')
    );

    const renderRightActions = () => (
        <React.Fragment>
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem accessoryLeft={Parametre} title='Paramètres' onPress={navigateParametres} />
                <MenuItem accessoryLeft={Info} title='Infos' onPress={navigateInfos} />
            </OverflowMenu>
        </React.Fragment>
    );
    //jusqu'ici

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' accessoryRight={renderRightActions} />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            </Layout>
        </SafeAreaView>
    );
};
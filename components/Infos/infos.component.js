import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import expoStatusBar from 'expo-status-bar';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

// TODO: Mettez vos nom j'ai la flemme
const data = [
    { title: "Léo Cholvy" },
    { title: "Az" },
    { title: "az" },
    { title: "dg" },
    { title: "aer" },
];

export const InfosScreen = ({ navigation }) => {

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    const renderItemAccessory = (props) => (
        <Button size='tiny'>voir plus</Button>
    );

    const renderItemIcon = (props) => (
        <Icon {...props} name='person' />
    );

    const renderItem = ({ item, index }) => (
        <ListItem
            title={item.title}
            accessoryLeft={renderItemIcon}
            accessoryRight={renderItemAccessory}
        />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction} subtitle='infos' />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category="s1" style={styles.titre}>
                    Un projet Open Source !
                </Text>
                {/* TODO: rediriger vers le lien */}
                <Button onPress={() => { Linking.openURL('https://github.com/Map-Popping-ADM/PrepSNU') }}>
                    github
                </Button>

                <Divider />

                <Text category="s1" style={styles.titre}>
                    Notre équipe
                </Text>
                <List
                    style={{ height: "auto", }}
                    data={data}
                    renderItem={renderItem}
                />

                <Divider />
                <Text category="s1" style={styles.titre}>
                    Techonologies
                </Text>
                <Text style={{paddingLeft: 40}} category="p1">
                    -expo
                    -kitten x eva
                    {/* TODO: ajouter les autres */}
                </Text>

            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titre: {
        paddingLeft: 30,
        paddingTop: 20
    }
});
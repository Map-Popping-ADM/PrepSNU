import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Toggle, Divider, Icon, Layout, Text, TopNavigation,
    TopNavigationAction, Input, IndexPath, Select, SelectItem
} from '@ui-kitten/components';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

export const ParametreScreen = ({ navigation }) => {

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    // toggle mode

    const [checked, setChecked] = React.useState(true);
    const [messageMode, setMessageMode] = React.useState("Activer le mode clair");

    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);

        if (checked) {
            setMessageMode("Activer le mode sombre");
        } else {
            setMessageMode("Activer le mode clair");
        }
    };

    // input
    const [value, setValue] = React.useState('');

    // langue
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction} subtitle='parametres' />
            <Divider />
            <Layout style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                {/* le toggle pour changer de mode */}
                {/* TODO dark/lighe Mode (button) */}
                <Text category="s1" style={styles.titre}>
                    Apparence
                </Text>
                <Toggle checked={checked} onChange={onCheckedChange} style={{ padding: 15 }}>
                    <Text>
                        {messageMode}
                    </Text>
                </Toggle>

                <Divider />

                {/* Input */}
                {/* TODO entrée id (récup l'id entré par l'user) */}
                <Text category="s1" style={styles.titre}>
                    Id API
                </Text>
                <Input
                    placeholder='Entrez votre token'
                    value={value}
                    onChangeText={nextValue => setValue(nextValue)}
                    style={{
                        padding:12,
                    }}
                />

                <Divider />

                {/* langue */}
                {/* TODO langue (récup la langue et changer la langue de l'app) */}
                <Text category="s1" style={styles.titre}>
                    Langue
                </Text>
                <Select
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}
                    style={{width:"100%",padding:12,}}>

                    <SelectItem title='Français'/>
                    <SelectItem title='Anglais'/>
                </Select>

            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titre: {
        paddingLeft:30,
        paddingTop:20
    }
  });
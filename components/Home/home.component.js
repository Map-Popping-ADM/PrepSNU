import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, Divider, Layout, TopNavigation, TopNavigationAction, Icon, Card } from '@ui-kitten/components';
import { MenuItem, OverflowMenu } from '@ui-kitten/components';
import {ImageBackground} from 'react-native-web';

const MenuIcon = (props) => (
  <Icon {...props} name='more-vertical'/>
);
const Parametre = (props) => (
  <Icon {...props} name='settings-2-outline'/>
);
const Info = (props) => (
  <Icon {...props} name='info-outline'/>
);

export const HomeScreen = ({ navigation }) => {

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
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
        <MenuItem accessoryLeft={Parametre} title='Paramètres' onPress={navigateParametres}/>
        <MenuItem accessoryLeft={Info} title='Infos' onPress={navigateInfos}/>
      </OverflowMenu>
    </React.Fragment>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' accessoryRight={renderRightActions}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Card style={styles.card} onPress={navigateParametres}>
          <Text category="h2">
              Carte
          </Text>
        </Card>
      </Layout>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  card: {
    margin: 15,
    width: "90%",
    height: "20%"
  }
});
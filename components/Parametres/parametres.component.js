import React from 'react';
import { SafeAreaView } from 'react-native';
import { Toggle, Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const ParametreScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const [checked, setChecked] = React.useState(true);
  const [messageMode, setMessageMode] = React.useState("Mode clair");

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);

    if (checked) {
      setMessageMode ("Mode sombre");
    } else {
      setMessageMode ("Mode clair");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction} subtitle='parametres'/>
      <Divider/>
      <Layout style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Layout style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Toggle checked={checked} onChange={onCheckedChange} style={{padding:15}}>
          <Text>
            { messageMode }
          </Text>
        </Toggle>
        </Layout>
        <Divider/>
      </Layout>
    </SafeAreaView>
  );
};
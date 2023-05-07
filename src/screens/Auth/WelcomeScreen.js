import React from 'react';
import {Text, View} from 'react-native';
import CommonHeader from '../../components/Header/CommonHeader';
import {colors, commonContainerStyle, images} from '../../Utilis/theme';
const WelcomeScreen = () => {
  return (
    <View style={commonContainerStyle.container}>
      <CommonHeader />
    </View>
  );
};

export default WelcomeScreen;

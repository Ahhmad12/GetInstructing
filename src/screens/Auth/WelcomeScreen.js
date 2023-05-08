import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import CommonHeader from '../../components/Header/CommonHeader';
import {colors, commonContainerStyle, images} from '../../Utilis/theme';
import InputField from '../../components/TextInput/inputField';
import {strings} from '../../Utilis/en';
import {screenHeightPer, screenWidthPer} from '../../Utilis/Dimensions';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Buttons/Button';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={commonContainerStyle.container}>
      <ScrollView>
        <CommonHeader title={strings.welcome} subTitle={strings.signIn} />
        <View style={styles.inputPosition}>
          <InputField
            borderColor={colors.orange}
            width={screenWidthPer * 70}
            placeholder={strings.phone}
          />
          <InputField
            borderColor={colors.orange}
            width={screenWidthPer * 70}
            placeholder={strings.password}
          />
        </View>

        <View style={styles.buttonPosition}>
          <Button
            title={strings.login}
            width={177}
            backgroundColor={colors.orange}
            borderRadius={10}
            height={48}
            fontSize={16}
            fontWeight={600}
          />
          <Text style={styles.smallText}>{strings.forgetPassword}</Text>
        </View>
      </ScrollView>

      <View style={styles.signUpPosition}>
        <Text style={styles.smallText2}>{strings.dontHaveAccount}</Text>
        <Pressable onPress={() => navigation.navigate('UserType')}>
          <Text style={styles.mediumText}>{strings.signUp}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPosition: {
    alignItems: 'center',
    paddingTop: screenHeightPer * 7,
  },
  buttonPosition: {
    alignItems: 'center',
    paddingVertical: '8%',
  },
  smallText: {
    fontSize: 16,
    color: colors.darkGray,
    paddingVertical: '3%',
  },
  smallText2: {
    fontSize: 17,
    color: colors.darkGray,
  },
  mediumText: {
    fontSize: 17,
    color: colors.orange,
  },
  signUpPosition: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: '5%',
  },
});
export default WelcomeScreen;

import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {colors, commonContainerStyle} from '../../Utilis/theme';
import CommonHeader from '../../components/Header/CommonHeader';
import {strings} from '../../Utilis/en';
import InputField from '../../components/TextInput/inputField';
import {screenHeightPer, screenWidthPer} from '../../Utilis/Dimensions';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Buttons/Button';
import {useNavigation} from '@react-navigation/native';

const RegistrationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={commonContainerStyle.container}>
      <ScrollView>
        <CommonHeader
          title={strings.newAccount}
          subTitle={strings.signupStarted}
        />

        <View style={styles.container2}>
          <InputField
            placeholder={strings.personalName}
            borderColor={colors.gray}
            width={screenWidthPer * 70}
          />
          <InputField
            placeholder={strings.phone}
            borderColor={colors.gray}
            width={screenWidthPer * 70}
          />
          <InputField
            placeholder={strings.email}
            borderColor={colors.gray}
            width={screenWidthPer * 70}
          />
          <InputField
            placeholder={strings.password}
            borderColor={colors.gray}
            width={screenWidthPer * 70}
          />
          <InputField
            placeholder={strings.confirmPassword}
            borderColor={colors.gray}
            width={screenWidthPer * 70}
          />
        </View>
      </ScrollView>
      <View style={styles.container2}>
        <Button
          onPress={navigation.goBack}
          title={strings.goBack}
          width={177}
          backgroundColor={colors.orange}
          borderRadius={10}
          height={48}
          fontSize={16}
          fontWeight={600}
        />
        <View style={styles.container3}>
          <Text style={styles.smallText}>{strings.alreadyAccount}</Text>
          <Pressable onPress={() => navigation.navigate('WelcomeScreen')}>
            <Text style={styles.mediumText}>{strings.signIn}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    alignItems: 'center',
    paddingVertical: '0.5%',
  },
  container3: {
    flexDirection: 'row',
    paddingVertical: '2%',
  },
  mediumText: {
    color: colors.orange,
    fontWeight: 400,
    fontSize: 17,
  },
  smallText: {
    fontWeight: 400,
    fontSize: 17,
    color: colors.gray,
  },
});

export default RegistrationScreen;

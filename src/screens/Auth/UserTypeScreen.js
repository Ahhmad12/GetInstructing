import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import CommonHeader from '../../components/Header/CommonHeader';
import {colors, commonContainerStyle, images} from '../../Utilis/theme';
import InputField from '../../components/TextInput/inputField';
import {strings} from '../../Utilis/en';
import {
  screenHeight,
  screenHeightPer,
  screenWidthPer,
} from '../../Utilis/Dimensions';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Buttons/Button';
import {useNavigation} from '@react-navigation/native';

const UserTypeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={commonContainerStyle.container}>
      <ScrollView>
        <CommonHeader title={strings.pleaseSelect} />
        <View style={styles.buttonPosition}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Image style={styles.imageSize3} source={images.instructor} />
            <Text style={styles.smallText}>{strings.continueAsInstructor}</Text>
          </TouchableOpacity>
          <View style={{paddingTop: screenHeightPer * 2}}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image style={styles.imageSize3} source={images.student} />
              <Text style={styles.smallText}>{strings.continueAsStudent}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonPosition2}>
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPosition: {
    alignItems: 'center',
  },
  buttonPosition: {
    alignItems: 'center',
    paddingTop: screenHeightPer * 3,
  },
  buttonPosition2: {
    alignItems: 'center',
    paddingVertical: screenHeightPer * 6,
  },
  smallText: {
    fontSize: 16,
    color: colors.darkGray,
    paddingVertical: '3%',
    textAlign: 'center',
    fontWeight: 600,
    color: colors.black,
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
  buttonStyle: {
    backgroundColor: colors.semigray,
    width: screenWidthPer * 40,
    borderRadius: 20,
    paddingVertical: '6%',
    alignItems: 'center',
    height: screenHeightPer * 22,
  },
  imageSize3: {
    height: screenHeightPer * 10.2,
    width: screenWidthPer * 21,
  },
});
export default UserTypeScreen;

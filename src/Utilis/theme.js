import {StyleSheet} from 'react-native';

export const colors = {
  lightGray: '#F1F1F1',
  darkGray: '#83829A',
  black: '#444262',
  white: 'white',
  orange: '#F58220',
  purplelight: '#6B2B9699',
  green: '#B3DB18',
  red: '#BD3A3A',
  gray: '#83829A',
  semigray: '#F5F2F8',
};
export const images = {
  ellipe1: require('../assets/Logos/ellipe1.png'),
  ellipe2: require('../assets/Logos/ellipe2.png'),
  ellipe3: require('../assets/Logos/ellipe3.png'),
  logo: require('../assets/Logos/logo.png'),
  instructor: require('../assets/Logos/instructor.png'),
  student: require('../assets/Logos/student.png'),
};

export const commonContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heading1: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '400',
    marginVertical: '5%',
  },
});

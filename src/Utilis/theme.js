import {StyleSheet} from 'react-native';

export const colors = {
  lightGray: '#F1F1F1',
  darkGray: '#111111',
  black: '#000000',
  white: 'white',
  purple: '#6b2b96',
  purplelight: '#6B2B9699',
  green: '#B3DB18',
  red: '#BD3A3A',
  gray: '#D9D9D9',
  semigray: '#F1F1F1',
};
export const images = {
  ellipe1: require('../assets/Logos/ellipe1.png'),
  ellipe2: require('../assets/Logos/ellipe2.png'),
  ellipe3: require('../assets/Logos/ellipe3.png'),
};

export const commonContainerStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    flex: 1,
  },
  heading1: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '400',
    marginVertical: '5%',
  },
});

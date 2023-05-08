import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors, images} from '../../Utilis/theme';
// import {Image, Text} from 'react-native-animatable';

const Button = ({
  title,
  onPress,
  width,
  marginHorizontal,
  marginVertical,
  backgroundColor,
  textColor,
  borderRadius,
  height,
  fontWeight,
  fontSize,
  textDecorationLine,
}) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: backgroundColor || colors.purple,
      padding: 15,
      width: width || '100%',
      height: height,
      borderRadius: borderRadius || 8,
      marginHorizontal: marginHorizontal || 0,
      marginVertical: marginVertical || 0,
      textDecorationLine: textDecorationLine || null,
    },
    btnText: {
      color: textColor || colors.white,
      fontWeight: fontWeight || '500',
      fontSize: fontSize || 18,
    },
    iconStyle: {},
  });
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

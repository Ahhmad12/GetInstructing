import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import {colors, images} from '../../Utilis/theme';
import {screenHeightPer, screenWidthPer} from '../../Utilis/Dimensions';

const InputField = ({
  onChangeText,
  keyboardType,
  title,
  containerStyle,
  secureTextEntry,
  placeholder,
  width,
  borderColor,
  value,
  isEye,
  error = '',
}) => {
  const styles = StyleSheet.create({
    textInputStyle: {
      height: 50,
      borderRadius: 5,
      borderWidth: 1,
      paddingLeft: 20,
      width: width || '100%',
      borderColor: borderColor || colors.black,
      color: colors.black,
      backgroundColor: colors.white,
    },
    container: {
      marginBottom: 10,
    },
    title: {
      color: colors.darkGray,
      fontSize: 14,
      fontWeight: '500',
    },
    iconStyle: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={{...styles.container, ...containerStyle}}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rowView}>
        <TextInput
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          style={styles.textInputStyle}
          underLineColorAndroid="transparent"
          placeholder={placeholder}
          value={value}
          spellCheck={false}
        />

        {isEye ? (
          <TouchableOpacity
            style={styles.iconPosition}
            onPress={togglePasswordVisibility}>
            <Image
              style={styles.iconStyle}
              source={
                isPasswordVisible ? images.openEyeIcon : images.closedEyeIcon
              }
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {error && <Text style={styles.titleError}>{error}</Text>}
    </View>
  );
};

export default InputField;

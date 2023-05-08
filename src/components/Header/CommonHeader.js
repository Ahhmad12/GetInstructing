import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import React from 'react';
import {colors, commonContainerStyle, images} from '../../Utilis/theme';
import {
  screenWidth,
  screenHeight,
  screenHeightPer,
  screenWidthPer,
} from '../../Utilis/Dimensions';
import {ScrollView} from 'react-native-gesture-handler';
export default function CommonHeader({icon, onPress, title, subTitle}) {
  return (
    <View>
      <View style={styles.header}>
        <View style={{paddingTop: '10%'}}>
          <Image style={styles.imageSize} source={images.ellipe3} />
        </View>
        <View style={styles.header1}>
          <Image style={styles.imageSize3} source={images.ellipe2} />
          <Image style={styles.imageSize2} source={images.ellipe1} />
        </View>
      </View>
      <View style={styles.imagePosition}>
        <Image style={styles.imageSize4} source={images.logo} />
      </View>
      <View style={styles.textPosition}>
        <Text style={styles.bigText}>{title}</Text>
        <Text style={styles.smallText}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header1: {
    flexDirection: 'row',
  },
  imageSize: {
    height: screenHeightPer * 8.2,
    width: screenHeightPer * 4.2,
  },
  imageSize4: {
    height: screenHeightPer * 6.3,
    width: screenHeightPer * 30,
  },
  imageSize2: {
    height: screenHeightPer * 8.5,
    width: screenHeightPer * 9,
  },
  imageSize3: {
    height: screenHeightPer * 6.8,
    width: screenWidthPer * 32,
    position: 'absolute',
    zIndex: 1,
    marginLeft: -100,
  },
  imagePosition: {
    alignItems: 'center',
  },
  bigText: {
    fontSize: 26,
    fontWeight: 700,
    color: colors.black,
  },
  smallText: {
    fontSize: 18,
    fontWeight: 400,
    color: colors.gray,
  },
  textPosition: {
    alignItems: 'center',
    paddingTop: screenHeightPer * 5,
  },
});

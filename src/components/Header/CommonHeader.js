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
export default function CommonHeader({icon, onPress, title}) {
  return (
    <View style={commonContainerStyle.container}>
      <View style={styles.header}>
        <View style={{paddingVertical: '13%'}}>
          <Image style={styles.ImageSize} source={images.ellipe3} />
        </View>
        <View style={styles.header1}>
          <Image style={styles.ImageSize3} source={images.ellipe2} />
          <Image style={styles.ImageSize2} source={images.ellipe1} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  header1: {
    flexDirection: 'row',
  },
  ImageSize: {
    height: screenHeightPer * 8.2,
    width: screenHeightPer * 4.2,
  },
  ImageSize2: {
    height: screenHeightPer * 8.5,
    width: screenHeightPer * 9,
  },
  ImageSize3: {
    height: screenHeightPer * 6.8,
    width: screenWidthPer * 32,
    position: 'absolute',
    zIndex: 1,
    marginLeft: -100,
  },
});

import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

import DemiBold from '../../../../components/ui/DemiBold';
import tryHosting from '../../../../assets/tryhosting.webp';
import RipplePressable from '../../../../components/ui/RipplePressable';
import AppText from '../../../../components/ui/AppText';

const TryHosting: React.FC<{}> = () => (
  <RipplePressable style={styles.container}>
    <ImageBackground
      source={tryHosting}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.content}>
        <DemiBold style={styles.title}>Try Hosting</DemiBold>
        <AppText style={styles.description}>
          Earn extra income and unlock new opportunites by sharing your space.
        </AppText>
        <View style={styles.button}>
          <DemiBold style={styles.buttonText}>Learn More</DemiBold>
        </View>
      </View>
    </ImageBackground>
  </RipplePressable>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
  },
  background: {
    marginHorizontal: 24,
    borderRadius: 16,
    overflow: 'hidden',
    flex: 1,
    aspectRatio: 0.75,
  },
  content: {
    paddingHorizontal: 32,
    paddingTop: 32,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    lineHeight: 24,
  },
  description: {
    paddingTop: 8,
    textAlign: 'center',
    color: '#fff',
    paddingHorizontal: 40,
    fontSize: 14,
  },
  button: {
    alignSelf: 'center',
    marginTop: 16,
    paddingVertical: 9,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
  },
});

export default TryHosting;

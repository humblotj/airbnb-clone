import React from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';

import DemiBold from '../../../../components/ui/DemiBold';
import whereToGoBackground from '../../../../assets/wheretogo.webp';
import ChipButton from '../../../../components/ui/ChipButton';

const vw = Dimensions.get('window').width;

const WhereToGo: React.FC<{}> = () => (
  <ImageBackground style={styles.background} source={whereToGoBackground}>
    <DemiBold style={styles.description}>
      Not sure where to go? Perfect.
    </DemiBold>
    <ChipButton style={styles.button}>I&apos;m flexible</ChipButton>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: (4 / 3) * vw,
    paddingHorizontal: 24,
    paddingTop: 96,
    paddingBottom: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    maxWidth: 200,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
  },
});

export default WhereToGo;

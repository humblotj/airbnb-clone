import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import AppText from '../../components/ui/AppText';

import RipplePressable from '../../components/ui/RipplePressable';
import Title from '../../components/ui/Title';

const Wishlists: React.FC<{}> = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.headerContainer}>
      <Title>Wishlists</Title>
      <AppText style={styles.tip}>
        When you find something you like, tap on the heart to save it. If
        you&apos;re planning a trip with others, invite them so they can save
        and vote on their favourites.
      </AppText>
    </View>
    <RipplePressable>
      <AppText style={styles.buttonText}>Start exploring</AppText>
    </RipplePressable>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  headerContainer: {
    paddingHorizontal: 24,
  },
  subTitle: {
    fontSize: 18,
    lineHeight: 22,
  },
  tip: {
    marginVertical: 24,
    color: 'rgb(113, 113, 113)',
  },
  hr: {
    marginVertical: 30,
  },
  buttonText: {
    color: '#068489',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  button: {
    marginTop: 12,
  },
});

export default Wishlists;

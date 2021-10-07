import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Button from '../../components/ui/Button';
import Hr from '../../components/ui/Hr';
import Title from '../../components/ui/Title';
import DemiBold from '../../components/ui/DemiBold';
import AppText from '../../components/ui/AppText';

const Trips: React.FC<{}> = () => (
  <>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <SafeAreaView style={styles.container}>
      <Title>Trips</Title>
      <Hr style={styles.hr} />
      <DemiBold style={styles.subTitle}>No trips yet</DemiBold>
      <AppText style={styles.tip}>
        When you&apos;re ready to plan your next trip, we&apos;re here to help
      </AppText>
      <Button style={styles.button}>Log In</Button>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  subTitle: {
    fontSize: 18,
    lineHeight: 22,
  },
  tip: {
    color: 'rgb(113, 113, 113)',
  },
  hr: {
    marginVertical: 30,
  },
  button: {
    marginTop: 12,
  },
});

export default Trips;

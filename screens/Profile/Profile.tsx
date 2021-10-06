import React from 'react';
import {
  SafeAreaView, StyleSheet, View,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import Button from '../../components/ui/Button';
import Hr from '../../components/ui/Hr';
import Title from '../../components/ui/Title';
import SettingsIcon from '../../assets/icons/settings.svg';
import HostingIcon from '../../assets/icons/hosting.svg';
import HelpIcon from '../../assets/icons/help.svg';
import TermsIcon from '../../assets/icons/terms.svg';
import RipplePressable from '../../components/ui/RipplePressable';
import DemiBold from '../../components/ui/DemiBold';
import AppText from '../../components/ui/AppText';

const Profile = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.headerContainer}>
      <Title style={styles.title}>Your profile</Title>
      <AppText>Log in to start planning your next trip.</AppText>
      <Button style={styles.button} width100>Log In</Button>
      <RipplePressable style={styles.noAccount}>
        <AppText>
          <AppText>Don&apos;t have an account? </AppText>
          <DemiBold style={styles.underline}>Sign up</DemiBold>
        </AppText>
      </RipplePressable>
    </View>
    <Hr style={styles.hr} />
    <RipplePressable style={styles.navItem}>
      <AppText style={styles.navLabel}>Settings</AppText>
      <SettingsIcon style={styles.icon} />
    </RipplePressable>
    <Hr style={styles.hr} />
    <RipplePressable style={styles.navItem}>
      <AppText style={styles.navLabel}>Learn about hosting</AppText>
      <HostingIcon style={styles.icon} />
    </RipplePressable>
    <Hr style={styles.hr} />
    <RipplePressable style={styles.navItem}>
      <AppText style={styles.navLabel}>Get help</AppText>
      <HelpIcon style={styles.icon} />
    </RipplePressable>
    <Hr style={styles.hr} />
    <RipplePressable style={styles.navItem}>
      <AppText style={styles.navLabel}>Terms of Service</AppText>
      <TermsIcon style={styles.icon} />
    </RipplePressable>
    <Hr style={styles.hr} />
    <AppText style={styles.versionText}>{`Version ${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`}</AppText>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  headerContainer: {
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 4,
  },
  noAccount: {
    flexDirection: 'row',
    paddingBottom: 12,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  tip: {
    color: 'rgb(113, 113, 113)',
  },
  hr: {
    marginHorizontal: 24,
  },
  button: {
    marginVertical: 24,
  },
  navItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  navLabel: {
    fontSize: 18,
    color: 'rgb(72, 72, 72)',
  },
  icon: {
    width: 18,
    height: 18,
    color: '#000',
  },
  versionText: {
    marginTop: 24,
    textAlign: 'center',
    color: 'rgb(72, 72, 72)',
  },
});

export default Profile;

import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from './AppText';

interface Props {
  style?: any,
  children: React.ReactNode
}

const DemiBold = ({ style, children }: Props) => (
  <AppText style={[styles.strong, style]}>
    {children}
  </AppText>
);

const styles = StyleSheet.create({
  strong: {
    fontWeight: '600',
  },
});

export default DemiBold;

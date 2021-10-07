import React from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

import AppText from './AppText';

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const Bold: React.FC<Props> = ({ style, children }) => (
  <AppText style={[styles.strong, style]}>{children}</AppText>
);

const styles = StyleSheet.create({
  strong: {
    fontWeight: '700',
  },
});

export default Bold;

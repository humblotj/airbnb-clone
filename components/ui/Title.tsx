import React from 'react';
import { StyleSheet } from 'react-native';

import Bold from './Bold';

interface Props {
  style?: any,
  children: React.ReactNode
}

const Title = ({ style, children }: Props) => (
  <Bold style={[styles.title, style]}>
    {children}
  </Bold>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    lineHeight: 36,
  },
});

export default Title;

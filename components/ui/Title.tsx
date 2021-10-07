import React from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

import Bold from './Bold';

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ style, children }: Props) => (
  <Bold style={[styles.title, style]}>{children}</Bold>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    lineHeight: 36,
  },
});

export default Title;

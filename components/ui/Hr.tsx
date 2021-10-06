import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
    style?: any
}

const Hr = ({ style }: Props) => (
  <View style={[styles.hr, style]} />
);

const styles = StyleSheet.create({
  hr: {
    // width: '100%',
    height: 1,
    backgroundColor: 'rgb(228, 228, 228)',
  },
});

export default Hr;

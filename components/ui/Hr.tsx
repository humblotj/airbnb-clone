import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Hr: React.FC<Props> = ({ style }) => <View style={[styles.hr, style]} />;

const styles = StyleSheet.create({
  hr: {
    height: 1,
    backgroundColor: 'rgb(228, 228, 228)',
  },
});

export default Hr;

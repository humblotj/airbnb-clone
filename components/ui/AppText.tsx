import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<Props> = ({ children, style }) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'rgb(34, 34, 34)',
  },
});

export default AppText;

import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
    children: React.ReactNode,
    style?: any,
}

const AppText = ({ children, style }: Props) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'rgb(34, 34, 34)',
  },
});

export default AppText;

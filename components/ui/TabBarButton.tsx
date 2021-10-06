import React from 'react';
import {
  StyleSheet, TouchableNativeFeedback, View,
} from 'react-native';

type Props = {
  children?: React.ReactNode
}

const TabBarButton = ({ children = null, ...rest }: Props) => (
  <TouchableNativeFeedback
    {...rest}
    background={TouchableNativeFeedback.Ripple('rgba(0,0,0, 0.1)', true)}
  >
    <View style={styles.container}>
      {children}
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TabBarButton;

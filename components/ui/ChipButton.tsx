import React, { useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  Animated,
  StyleProp,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

import AppText from './AppText';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const ChipButton: React.FC<Props> = ({ children, style, ...rest }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.96,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={style}
      {...rest}
    >
      <Animated.View
        style={[styles.container, { transform: [{ scale: scaleAnim }] }]}
      >
        <MaskedView
          maskElement={<AppText style={styles.text}>{children}</AppText>}
        >
          <LinearGradient
            colors={['#6F019C', '#C6017E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1.35, y: 0 }}
          >
            <AppText style={[styles.text, styles.hidden]}>{children}</AppText>
          </LinearGradient>
        </MaskedView>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 54,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  hidden: {
    opacity: 0,
  },
  text: {
    textAlign: 'center',
    paddingVertical: 14.5,
    paddingHorizontal: 32,
    fontSize: 18,
    fontWeight: '800',
  },
});

export default ChipButton;

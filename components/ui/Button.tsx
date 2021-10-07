import React, { useState, useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  Animated,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AppText from './AppText';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  color?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
  width100?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(LinearGradient);

const Button: React.FC<Props> = ({
  children,
  disabled = false,
  color = 'primary',
  style,
  width100 = false,
}) => {
  const [isActive, setIsActive] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    setIsActive(true);
    Animated.timing(scaleAnim, {
      toValue: 0.96,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    setIsActive(false);
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const Wrap = ({ children }: { children: React.ReactNode }) => {
    if (disabled) {
      return (
        <View style={[styles.container, styles.disabled]}>{children}</View>
      );
    }
    if (color === 'secondary') {
      return (
        <Animated.View
          style={[
            styles.container,
            styles.secondary,
            isActive && styles.activeSecondary,
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          {children}
        </Animated.View>
      );
    }
    return (
      <AnimatedPressable
        colors={
          isActive
            ? ['rgb(255, 56, 92) ', 'rgb(255, 56, 92) ', 'rgb(255, 56, 92) ']
            : ['rgb(230, 30, 77)', 'rgb(227, 28, 95)', 'rgb(215, 4, 102)']
        }
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[styles.container, { transform: [{ scale: scaleAnim }] }]}
      >
        {children}
      </AnimatedPressable>
    );
  };

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
      style={[styles.button, width100 && styles.width100, style]}
    >
      <Wrap>
        {typeof children === 'string' ? (
          <AppText style={styles.text}>{children}</AppText>
        ) : (
          { children }
        )}
      </Wrap>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
  },
  width100: {
    width: '100%',
  },
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  secondary: {
    borderWidth: 1,
  },
  activeSecondary: {
    backgroundColor: 'rgb(247, 247, 247)',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    lineHeight: 20,
    fontWeight: '600',
  },
  disabled: {
    backgroundColor: 'rgb(221, 221, 221)',
  },
});

export default Button;

import React from 'react';
import {
  StyleProp,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  children?: React.ReactNode;
  borderless?: boolean;
  style?: StyleProp<ViewStyle>;
};

const RipplePressable: React.FC<Props> = ({
  children = null,
  borderless = false,
  style,
  ...rest
}) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple('rgba(0,0,0, 0.1)', borderless)}
    style={style}
    {...rest}
  >
    <View style={style}>{children}</View>
  </TouchableNativeFeedback>
);

export default RipplePressable;

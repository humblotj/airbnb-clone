import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

type Props = {
  children?: React.ReactNode,
  borderless?: boolean,
  style?: any
}

const RipplePressable = ({
  children = null, borderless = false, style, ...rest
}: Props) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple('rgba(0,0,0, 0.1)', borderless)}
    style={style}
    {...rest}
  >
    <View style={style}>
      {children}
    </View>
  </TouchableNativeFeedback>
);

export default RipplePressable;

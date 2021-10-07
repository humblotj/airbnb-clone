import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated, View, ViewStyle, StyleProp } from 'react-native';

import RipplePressable from '../../../../components/ui/RipplePressable';
import ExploreIcon from '../../../../assets/icons/explore.svg';
import DemiBold from '../../../../components/ui/DemiBold';
import Bold from '../../../../components/ui/Bold';

const SearchButton: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({ children, style }) => (
  <RipplePressable style={[styles.searchButton, style]}>
    <ExploreIcon width={16} height={16} style={styles.searchIcon} />
    <DemiBold style={styles.searchButtonText}>{children}</DemiBold>
  </RipplePressable>
);
interface Props {
  scrollY: Animated.Value;
}

const HomeHeader: React.FC<Props> = ({ scrollY }) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    scrollY.addListener(({ value }) => {
      if (isTop !== value < 10) {
        setIsTop(value < 10);
      }
    });
  }, [scrollY, isTop]);

  return (
    <Animated.View
      style={[
        styles.header,
        {
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 40],
                outputRange: [0, -40],
                extrapolate: 'clamp',
              }),
            },
          ],
        },
      ]}
    >
      <RipplePressable style={styles.covidLink}>
        <Bold style={styles.covidContent}>
          Get the latest on our COVID-19 response
        </Bold>
      </RipplePressable>
      <View style={styles.headerContent}>
        <Animated.View
          style={[
            styles.background,
            {
              opacity: scrollY.interpolate({
                inputRange: [40, 50],
                outputRange: [0, 1],
                extrapolate: 'clamp',
              }),
            },
          ]}
        />
        <SearchButton style={!isTop && styles.darkButton}>
          Where are you going?
        </SearchButton>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
  },
  covidLink: {
    backgroundColor: '#222',
    paddingTop: 6,
    paddingBottom: 12,
    overflow: 'hidden',
  },
  covidContent: {
    fontSize: 14,
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: '#8d8d8d',
  },
  headerContent: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
  },
  searchButton: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
  },
  darkButton: {
    backgroundColor: 'rgb(247, 247, 247)',
  },
  searchIcon: {
    color: '#FF385C',
    marginRight: 8,
  },
  searchButtonText: {
    fontSize: 14,
  },
});

export default HomeHeader;

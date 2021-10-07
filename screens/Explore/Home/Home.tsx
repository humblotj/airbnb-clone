import React, { useRef } from 'react';
import { Animated, ScrollView } from 'react-native';
import Discover from './components/Discover';
import ExploreNearby from './components/ExploreNearby';
import HomeHeader from './components/HomeHeader';
import LiveAnywhere from './components/LiveAnywhere';

import StayInformed from './components/StayInformed';
import TryHosting from './components/TryHosting';
import WhereToGo from './components/WhereToGo';

const Home: React.FC<{}> = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <>
      <HomeHeader scrollY={scrollY} />
      <ScrollView
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ])}
        scrollEventThrottle={1}
      >
        <WhereToGo />
        <ExploreNearby />
        <LiveAnywhere />
        <TryHosting />
        <Discover />
        <StayInformed />
      </ScrollView>
    </>
  );
};

export default Home;

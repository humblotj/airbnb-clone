import React from 'react';
import { ScrollView } from 'react-native';
import Discover from './components/Discover';
import ExploreNearby from './components/ExploreNearby';
import LiveAnywhere from './components/LiveAnywhere';

import StayInformed from './components/StayInformed';
import TryHosting from './components/TryHosting';
import WhereToGo from './components/WhereToGo';

const Home: React.FC<{}> = () => (
  <ScrollView>
    <WhereToGo />
    <ExploreNearby />
    <LiveAnywhere />
    <TryHosting />
    <Discover />
    <StayInformed />
  </ScrollView>
);

export default Home;

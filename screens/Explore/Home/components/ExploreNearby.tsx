import React, { useCallback } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import seoul from '../../../../assets/explore-nearby/seoul.webp';
import busan from '../../../../assets/explore-nearby/busan.jpeg';
import yangyangGun from '../../../../assets/explore-nearby/yangyang-gu.webp';
import sokchoSi from '../../../../assets/explore-nearby/sokcho-si.webp';
import daegu from '../../../../assets/explore-nearby/daegu.webp';
import wangjuGun from '../../../../assets/explore-nearby/wangju-gun.webp';

import Bold from '../../../../components/ui/Bold';
import DemiBold from '../../../../components/ui/DemiBold';
import RipplePressable from '../../../../components/ui/RipplePressable';
import AppText from '../../../../components/ui/AppText';

const { width: viewportWidth } = Dimensions.get('window');

const places = [
  [
    { city: 'Seoul', time: '15-minute', picture: seoul },
    { city: 'Busan', time: '15-minute', picture: busan },
  ],
  [
    { city: 'Yangyang-gun', time: '2.5-hour', picture: yangyangGun },
    { city: 'Sokcho-si', time: '2.5-hour', picture: sokchoSi },
  ],
  [
    { city: 'Daegu', time: '4-hour', picture: daegu },
    { city: 'Wangju-gun', time: '3-hour', picture: wangjuGun },
  ],
];

interface Props {
  city: string;
  time: string;
  picture: ImageSourcePropType;
}

const Place: React.FC<Props> = ({ city, time, picture }) => (
  <RipplePressable style={styles.place}>
    <Image style={styles.picture} source={picture} width={72} height={72} />
    <View>
      <DemiBold style={styles.city}>{city}</DemiBold>
      <AppText style={styles.time}>{`${time} drive`}</AppText>
    </View>
  </RipplePressable>
);

const ExploreNearby: React.FC<{}> = () => {
  const renderItem = useCallback(
    ({ item }: { item: Props[] }) => (
      <View>
        <Place {...item[0]} />
        <Place {...item[1]} />
      </View>
    ),
    [],
  );

  return (
    <View>
      <Bold style={styles.title}>Explore nearby</Bold>
      <Carousel
        contentContainerCustomStyle={styles.contentContainerStyle}
        data={places}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={272}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        useExperimentalSnap
        vertical={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
  title: {
    paddingHorizontal: 24,
    marginVertical: 24,
    fontSize: 22,
    lineHeight: 28,
  },
  place: {
    width: 272,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },
  city: {
    paddingBottom: 2,
  },
  time: {
    fontSize: 14,
  },
  picture: {
    borderRadius: 8,
    resizeMode: 'contain',
    marginRight: 12,
  },
});

export default ExploreNearby;

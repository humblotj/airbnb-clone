import React, { useCallback } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import outdoor from '../../../../assets/live-anywhere/outdoor.webp';
import unique from '../../../../assets/live-anywhere/unique.webp';
import homes from '../../../../assets/live-anywhere/homes.webp';
import pets from '../../../../assets/live-anywhere/pets.webp';

import Bold from '../../../../components/ui/Bold';
import DemiBold from '../../../../components/ui/DemiBold';
import RipplePressable from '../../../../components/ui/RipplePressable';

const { width: viewportWidth } = Dimensions.get('window');

const places = [
  { name: 'Outdoor gataways', picture: outdoor },
  { name: 'Unique stays', picture: unique },
  { name: 'Entire homes', picture: homes },
  { name: 'Pets allowed', picture: pets },
];

interface Props {
  name: string;
  picture: ImageSourcePropType;
}

const Place: React.FC<Props> = ({ name, picture }) => (
  <RipplePressable style={styles.place}>
    <Image style={styles.picture} source={picture} width={272} height={272} />
    <DemiBold style={styles.placeName}>{name}</DemiBold>
  </RipplePressable>
);

const LiveAnywhere: React.FC<{}> = () => {
  const renderItem = useCallback(
    ({ item }: { item: Props }) => <Place {...item} />,
    [],
  );

  return (
    <View>
      <Bold style={styles.title}>Live anywhere</Bold>
      <Carousel
        contentContainerCustomStyle={styles.contentContainerStyle}
        data={places}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={284}
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
    width: 284,
    padding: 6,
  },
  placeName: {
    marginVertical: 12,
  },
  picture: {
    borderRadius: 8,
    resizeMode: 'contain',
  },
});

export default LiveAnywhere;

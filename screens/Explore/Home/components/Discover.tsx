import React, { useCallback } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ImageSourcePropType,
} from 'react-native';

import experiencesPicture from '../../../../assets/discover/experiences.webp';
import onlineExperiencesPicture from '../../../../assets/discover/online-experiences.webp';
import featuredPicture from '../../../../assets/discover/featured.webp';

import Bold from '../../../../components/ui/Bold';
import DemiBold from '../../../../components/ui/DemiBold';
import RipplePressable from '../../../../components/ui/RipplePressable';
import AppText from '../../../../components/ui/AppText';

const things = [
  {
    name: 'Expericences',
    description: 'Find unforgettable activities near you.',
    picture: experiencesPicture,
  },
  {
    name: 'Online Expericences',
    description: 'Live, interactive activities led by Hosts.',
    picture: onlineExperiencesPicture,
  },
  {
    name: 'Featured collection: Wanderlust',
    description: 'Travel from home with Online Experiences',
    picture: featuredPicture,
  },
];

interface Props {
  name: string;
  description: string;
  picture: ImageSourcePropType;
}

const Thing: React.FC<Props> = ({ name, description, picture }) => (
  <RipplePressable style={styles.thing}>
    <Image style={styles.picture} source={picture} width={272} height={272} />
    <View style={styles.thingContent}>
      <DemiBold style={styles.name}>{name}</DemiBold>
      <AppText style={styles.description}>{description}</AppText>
    </View>
  </RipplePressable>
);

const Discover: React.FC<{}> = () => {
  const keyExtractor = useCallback((item: Props) => item.name, []);
  const renderItem = useCallback(
    ({ item }: { item: Props }) => <Thing {...item} />,
    [],
  );

  return (
    <View>
      <Bold style={styles.title}>Discover things to do</Bold>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        horizontal
        data={things}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
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
  thing: {
    width: 284,
    padding: 6,
  },
  name: {
    fontSize: 18,
  },
  description: {
    fontSize: 14,
  },
  thingContent: {
    marginVertical: 12,
  },
  picture: {
    borderRadius: 8,
    resizeMode: 'contain',
  },
});

export default Discover;

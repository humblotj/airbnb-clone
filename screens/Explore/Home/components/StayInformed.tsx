import React, { Fragment, useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Hr from '../../../../components/ui/Hr';
import RipplePressable from '../../../../components/ui/RipplePressable';
import Bold from '../../../../components/ui/Bold';
import DemiBold from '../../../../components/ui/DemiBold';
import AppText from '../../../../components/ui/AppText';

const lists = [
  {
    title: 'For guests',
    tabs: [
      {
        id: 1,
        label: 'Our COVID-19 response',
        subTitle: 'Health and safety updates',
      },
      {
        id: 2,
        label: 'Cancellation options',
        subTitle: "Learn what's covered",
      },
      { id: 3, label: 'Help Centre', subTitle: 'Get support' },
    ],
  },
  {
    title: 'For hosts',
    tabs: [
      {
        id: 1,
        label: 'Message from Brian Chesky',
        subTitle: 'Hear from our CEO',
      },
      {
        id: 2,
        label: 'Resources for hosting',
        subTitle: "What's affected by COVID-19",
      },
      { id: 3, label: 'Host Afghan refugees', subTitle: 'Learn how to help' },
    ],
  },
  {
    title: 'For COVID-19 responders',
    tabs: [
      {
        id: 1,
        label: 'Frontline stays',
        subTitle: 'Learn about our programme',
      },
      { id: 2, label: 'Sign up', subTitle: 'Check for housing options' },
      {
        id: 3,
        label: 'Help Centre',
        subTitle: 'Support nonprofit organisations',
      },
    ],
  },
  {
    title: 'More',
    tabs: [
      { id: 1, label: 'Airbnb Newsroom', subTitle: 'Latest announcements' },
      {
        id: 2,
        label: "Watch 'Made Possible by Hosts'",
        subTitle: 'Short films about Airbnb trips',
      },
      { id: 3, label: 'Airbnb 2021', subTitle: 'Introducing 100+ upgrades' },
    ],
  },
];

interface Props {
  title: string;
  tabs: { id: number; label: string; subTitle: string }[];
}

const StayInformedList: React.FC<Props> = ({ title, tabs }) => (
  <View style={styles.list}>
    <AppText style={styles.listTitle}>{title}</AppText>
    {tabs.map(({ id, label, subTitle }) => (
      <Fragment key={id}>
        <Hr style={styles.hr} />
        <RipplePressable style={styles.listItem}>
          <DemiBold style={styles.itemLabel}>{label}</DemiBold>
          <AppText style={styles.itemSubtitle}>{subTitle}</AppText>
        </RipplePressable>
      </Fragment>
    ))}
  </View>
);

const StayInformed: React.FC<{}> = () => {
  const keyExtractor = useCallback((item: Props) => item.title, []);
  const renderItem = useCallback(
    ({ item }: { item: Props }) => <StayInformedList {...item} />,
    [],
  );

  return (
    <View style={styles.container}>
      <Bold style={styles.title}>Stay informed</Bold>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        data={lists}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
  },
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
  list: {
    minWidth: 300,
  },
  listTitle: {
    marginBottom: 12,
    fontSize: 18,
    marginHorizontal: 12,
  },
  listItem: {
    paddingVertical: 24,
  },
  hr: {
    marginHorizontal: 12,
  },
  itemLabel: {
    marginHorizontal: 12,
  },
  itemSubtitle: {
    color: 'rgb(113, 113, 113)',
    marginHorizontal: 12,
    fontSize: 14,
  },
});

export default StayInformed;

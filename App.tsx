/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {G, Path, Rect, Svg} from 'react-native-svg';

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SeparatorLineLabel from './SeparatorLineLabel';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text
          style={{
            fontFamily: 'RobotoCondensed-Bold',
            fontSize: 32,
            fontWeight: '700',
          }}>
          RobotoCondensed-Bold - weight 700
        </Text>
        <Text
          style={{
            fontFamily: 'RobotoCondensed-Regular',
            fontSize: 32,
            fontWeight: '700',
          }}>
          RobotoCondensed-Regular - weight 700
        </Text>
        <Text
          style={{
            fontFamily: 'RobotoCondensed-Regular',
            fontSize: 32,
          }}>
          RobotoCondensed-Regular
        </Text>
        <Text
          style={{
            fontFamily: 'Chivo-Bold',
            fontSize: 32,
            fontWeight: '700',
          }}>
          Chivo-Bold - weight 700
        </Text>
        <Text
          style={{
            fontFamily: 'Chivo-Regular',
            fontSize: 32,
            fontWeight: '700',
          }}>
          Chivo-Regular - weight 700
        </Text>
        <Text
          style={{
            fontFamily: 'Chivo-Regular',
            fontSize: 32,
          }}>
          Chivo-Regular
        </Text>
      </ScrollView>
      <Svg width={300} height={200}>
        <Rect width={300} height={200} fill="#CCCCCC" />
        <G x={0} y={20}>
          <SeparatorLineLabel
            label="Some short text"
            color="green"
            labelColor="black"
          />
        </G>
        <Path
          d="M 30 60 L 75 7.5 L 97.5 0 L 90 22.5 L 37.5 67.5 C 45 75 45 82.5 52.5 75 C 52.5 82.5 60 90 52.5 90 A 10.65 10.65 90 0 1 45 97.5 A 37.5 37.5 90 0 0 30 75 Q 26.25 74.25 26.25 78.75 T 15 88.5 T 9 82.5 T 18.75 71.25 T 22.5 67.5 A 37.5 37.5 90 0 0 0 52.5 A 10.65 10.65 90 0 1 7.5 45 C 7.5 37.5 15 45 22.5 45 C 15 52.5 22.5 52.5 30 60 M 75 7.5 L 75 22.5 L 90 22.5 L 76.5 21 L 75 7.5"
          x={10}
          // fill={'transparent'}
          stroke={'black'}
          y={50}></Path>
      </Svg>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

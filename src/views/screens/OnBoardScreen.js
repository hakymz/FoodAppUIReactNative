import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Swiper style={style.wrapper}
        dot={
          <View
            style={style.indicator}
          />
        }
        activeDot={
          <View
            style={style.currentIndicator}
          />
        }
        showsButtons={false}>
        <View style={style.slide1}>
          <View style={{ height: 400 }}>
            <Image
              style={{
                width: '100%',
                resizeMode: 'contain',
                top: -150,
              }}
              source={require('../../assets/onboardImage.png')}
            />
          </View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={style.slide2}>
          <Text style={style.text}>Beautiful</Text>
        </View>
        <View style={style.slide3}>
          <Text style={style.text}>And simple</Text>
        </View>
      </Swiper>
      <View style={style.controlContainer}>
        <PrimaryButton
          onPress={() => navigation.navigate('Home')}
          title="Get Started"
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
  wrapper: {
  },
  controlContainer: {
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default OnBoardScreen;

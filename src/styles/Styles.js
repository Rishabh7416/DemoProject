import {StyleSheet, Dimensions} from 'react-native';
import {vh, vw, normalize} from '../components/reusable/resuableComponents/Dimensions';

const {height, width} = Dimensions.get('window');

/**
 * styles
 */
const styles = StyleSheet.create({
  signUptextInputStyle: {
    borderWidth: 0.5,
    height: 55,
    borderColor: '#dcdcdc',
    marginVertical: 5,
    paddingHorizontal: 20,
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.2,
  },

  signUpContainerStyle: {
    marginHorizontal: 20,
    flex: 1,
  },

  signUpCreateAccButtonStyle: {
    alignSelf: 'center',
    borderRadius: 4,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
    backgroundColor: 'grey',
  },

  logIntextInputStyle: {
    borderWidth: 0.5,
    height: 55,
    borderColor: '#dcdcdc',
    marginVertical: 5,
    paddingHorizontal: 20,
    fontSize: 13,
    fontWeight: '300',
    letterSpacing: 0.2,
  },

  signUpImageStyle: {
    height: 18,
    width: 18,
  },

  signUpRadioButtonStyle: {
    flexDirection: 'row',
  },

  radioButtonContainer: {
    flexDirection: 'row',
  },

  socialBtcontainernStyle: {
    flexDirection: 'row',
    // alignItems: 'flex-end',x
    justifyContent: 'space-between',
    width: '40%',
    alignSelf: 'center',
    marginBottom: 50,
  },

  homeScreenFbBtn: {
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    backgroundColor: 'white',
  },

  registerButtonStyle: {
    marginVertical: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 40,
    width: '50%',
    borderRadius: 7,
  },
  container: {
    marginVertical: 5,
    width: width - 20,
    alignSelf: 'center',
  },

  headerTitle: {
    // marginVertical: '3%',
    width: 360,
    alignSelf: 'center',
    fontSize: 18,
  },

  squareGridImage: {
    height: 140.3,
    width: width / 3.3,
    alignSelf: 'center',
  },

  circleGridContainerStyle: {
    alignItems: 'center',
    width: width / 3.1,
  },

  circleGridStyle: {
    height: width / 3.2115,
    width: width / 3.2115,
    alignSelf: 'center',
  },

  squareItemFooterTitle: {
    alignSelf: 'center',
    marginVertical: '2%',
    fontWeight: '300',
    fontSize: 12,
  },

  circleItemFooterTitle: {
    alignSelf: 'center',
    marginVertical: '7%',
    fontWeight: '300',
    fontSize: 12,
  },

  bannerBoxStyle: {
    width: vw(360),
    // width: width - 20,
    // width: width/1.1,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: vh(7),
  },
  mainContainer: {
    paddingHorizontal: vw(5),
    backgroundColor: 'white',
    flex: 1,
  },

  searchBarStyle: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    height: 34,
    paddingHorizontal: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%',
    marginHorizontal: vw(7)
  },

  renderItemStyle: {
    borderRadius: normalize(100 / 2),
    borderWidth: normalize(3.5),
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: vw(75),
    width: vw(75),
    // marginHorizontal: vw(3),
    margin: vh(1.8),
    overflow: 'hidden',
  },

  mainLogoStyle: {
    height: 40,
    width: 130,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  headerBellIconStyle: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 60,
    top: 12,
  },

  headerShopIconStyle: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 20,
    top: 12,
  },

  titleStyle: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
  },

  catButtonContainerStyle: {
    backgroundColor: 'black',
    width: '30%',
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    // paddingHorizontal: '5%'
  },

  brandsButtonContainerStyle: {
    backgroundColor: 'black',
    width: '20%',
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
  },

  searchButtonContainerStyle: {
    backgroundColor: '#f8f8ff',
    borderRadius: 8,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },

  identifierStyle: {
    position: 'absolute',
    height: 4,
    width: 100,
    backgroundColor: 'black',
    bottom: -10,
    backgroundColor: 'red',
  },

  topTabTextStyle: {
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 0.5,
  },

  sliderBannerStyle: {
    height: height / 4,
    width: width / 2.8,
    resizeMode: 'contain',
    marginHorizontal: vw(8.6),
    // backgroundColor: 'red'
  },

  categoryButtonContainerStyle: {
    flexDirection: 'row',
    // alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  categoryKeyStyle: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
  },

  categoryBannerStyle: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },

  categoryBannerContainer: {
    width: width / 1.7,
    // height: height / 4.3,
  },
  categoryBannerImage: {
    marginTop: height / 180,
    height: height / 4.3,
    width: width / 1.7,
  },
  categoryBannerTextStyle: {
    lineHeight: height / 28,
    fontSize: 11,
    letterSpacing: 0.5,
    marginTop: height / 80.5,
    alignSelf: 'flex-start',
  },

  gridContainer: {
    alignItems: 'center',
    marginVertical: vw(5),
    // backgroundColor: 'red',
  },
  gridItemContainer: {
    marginHorizontal: vw(6.4),
    marginVertical: vh(6.4),
  },
  gridImage: {
    width: vw(115),
    height: vw(115),
  },
  gridCircleItemTitle: {
    marginTop: vw(5),
    fontWeight: '600',
    textAlign: 'center',
  },
  gridCircleItemFooter: {
    fontSize: vw(12),
    fontWeight: '300',
    textAlign: 'center',
  },
  gridHeader: {
    width: vw(355),
    alignSelf: 'center',
    marginVertical: vw(5),
    textTransform: 'uppercase',
  },
  keyTextStyle: {
    marginHorizontal: vw(10),
    fontSize: 8,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },

  sliderSectionContainer: {
    width: 65,
    alignItems: 'center',
    // backgroundColor: 'red',
    height: height / 8,
    marginTop: height / 45,
    // marginRight: width / 34,
  },

  sliderSectionLabel: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 7.5,
    textTransform: 'uppercase',
  },

  searchIconStyle: {
    height: vh(20),
    width: vw(20),
    left: vw(4),
    position: 'absolute',
    marginHorizontal: vw(5)
  },

  micIconStyle:{
    position: 'absolute',
    height: vw(18),
    width: vw(18),
    right: vw(12)
  },








  textInputStyle: {
    width: '60%',
    height: normalize(35),
    marginLeft: normalize(7),
  },
  iconStyle: {
    opacity: 0.8,
    width: normalize(17),
    height: normalize(17),
    marginLeft: normalize(10),
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(35),
    width: normalize(110),
    backgroundColor: '#efefef',
    borderRadius: normalize(10),
  },
  subHeaderContainer: {
    flexDirection: 'row',
    padding: normalize(10),
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  categoryTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(27),
    width: normalize(110),
    backgroundColor: 'black',
    borderRadius: normalize(20),
    justifyContent: 'space-around',
  },
  categoryBrandView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: normalize(190),
    justifyContent: 'space-around',
    // marginHorizontal: normalize(10),
  },
  brandTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: normalize(70),
    height: normalize(27),
    backgroundColor: '#dfdbdb',
    borderRadius: normalize(20),
    justifyContent: 'space-around',
    // paddingHorizontal: normalize(4),
  },
  categoryText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: normalize(7),
    fontSize: normalize(10),
  },
  categoryIconStyle: {
    width: normalize(18),
    height: normalize(18),
    marginLeft: normalize(5),
  },

  brandsText: {
    color: 'black',
    fontWeight: '500',
    fontSize: normalize(11),
  },
  brandImage: {
    width: normalize(14),
    height: normalize(14),
  },
});

export {styles};
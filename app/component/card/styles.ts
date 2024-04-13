import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../constants/theme';

const styles = StyleSheet.create({
  circleCard: {
    width: 65,
    height: 65,
    backgroundColor: COLORS.black,
    borderRadius: 100,
    marginRight: 15,
    alignItems: 'center',
  },
  item: {
    backgroundColor: COLORS.primary,
    height: 90,
    paddingHorizontal: SIZES.f1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.s1,
    padding: 15,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {aspectRatio: 1, width: '80%', height: '80%'},
  text: {fontSize: SIZES.f4, fontFamily: 'Nunito-Bold'},
});

export default styles;

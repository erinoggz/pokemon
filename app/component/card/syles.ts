import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../../constants/theme';

const styles = StyleSheet.create({
  circleCard: {
    width: 65,
    height: 65,
    borderRadius: 100,
    alignItems: 'center',
    borderColor: COLORS.white,
    borderWidth: 2,
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
  text: {...FONTS.base_large, marginLeft: 15},
});

export default styles;

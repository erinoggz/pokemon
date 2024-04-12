import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../constants/theme';

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.white,
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
  text: {fontSize: SIZES.f4},
  circleCard: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.black,
    borderRadius: 50,
    marginRight: 15,
  },
});

export default styles;

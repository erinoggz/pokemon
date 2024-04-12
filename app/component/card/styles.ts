import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../constants/theme';

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.white,
    height: 60,
    paddingHorizontal: SIZES.f1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.s1,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  text: {
    ...FONTS.base,
    textAlign: 'center',
    color: COLORS.black,
  },
});
export default styles;

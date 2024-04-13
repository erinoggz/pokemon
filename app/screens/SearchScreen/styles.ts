import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  error: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  errorText: {color: COLORS.darkgrey, ...FONTS.base},
  gobackButton: {
    ...FONTS.base,
    color: COLORS.secondary,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  iconContainer: {position: 'absolute', top: 18, left: 15},
});
export default styles;

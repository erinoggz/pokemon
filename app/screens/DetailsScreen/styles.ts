import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants/theme';

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    flexDirection: 'column',
  },
  view2: {
    flex: 2,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  view3: {
    flex: 3,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: COLORS.primary,
    padding: 30,
    marginTop: 20,
  },
  container: {
    marginBottom: 15,
  },
  title: {
    ...FONTS.base,
    textTransform: 'uppercase',
    marginBottom: 5,
    color: COLORS.secondary,
  },
  description: {
    ...FONTS.base_small,
  },
  text2: {
    ...FONTS.small,
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  typesWrapper: {flexDirection: 'row'},
  types: {
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  typesText: {
    ...FONTS.base_small,
    textTransform: 'capitalize',
  },
  statsText: {
    ...FONTS.base_small,
    textTransform: 'capitalize',
    width: 50,
  },
  baseStats: {
    ...FONTS.small,
    paddingLeft: 5,
    color: COLORS.white,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 999,
    borderColor: COLORS.white,
    borderWidth: 2,
  },
  text1: {
    ...FONTS.large,
    textTransform: 'capitalize',
    color: COLORS.white,
    marginTop: 18,
  },
  barContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
  },
  progressBar: {
    backgroundColor: COLORS.grey,
    height: 15,
    borderRadius: 12,
    marginBottom: 7,
    marginLeft: 10,
    width: '100%',
  },
  progressBarInner: {
    backgroundColor: COLORS.secondary,
    height: 16,
    borderRadius: 12,
    width: '30%',
    textAlign: 'center',
  },
});

export default styles;

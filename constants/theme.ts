import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  grey: 'grey',
  primary: '#000000',
  secondary: '#000000',
};

export const SIZES = {
  // font sizes
  s1: 2,
  s2: 4,

  f0: 8,
  f1: 10,
  f2: 12,
  f3: 14,
  f4: 16,

  // app dimensions
  width,
  height,
};

const appTheme = {COLORS, SIZES};

export default appTheme;

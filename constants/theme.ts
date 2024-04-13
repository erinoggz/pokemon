export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  darkgrey: 'grey',
  grey: '#e8e8e8',
  primary: '#f9f8eb',
  secondary: 'teal',
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
  f5: 18,
  f6: 24,
  f7: 26,
};

export const FONTS = {
  extra_extra_small: {fontFamily: 'Nunito-Bold', fontSize: SIZES.f0},
  extra_small: {
    fontFamily: 'Nunito-Bold',
    fontSize: SIZES.f1,
  },
  small: {fontFamily: 'Nunito-Bold', fontSize: SIZES.f2},
  base_small: {
    fontFamily: 'Nunito-Bold',
    fontSize: SIZES.f3,
  },
  base_large: {
    fontFamily: 'Nunito-Bold',
    fontSize: SIZES.f4,
  },
  base: {
    fontFamily: 'Nunito-Bold',
    fontSize: SIZES.f5,
  },
  medium: {
    fontFamily: 'Nunito-Bold',
    fontSize: SIZES.f6,
  },
  large: {
    fontFamily: 'Nunito-Bold',
    fontSize: SIZES.f7,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;

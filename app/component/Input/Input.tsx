import React from 'react';
import {TextInput, TextInputProps, TextStyle} from 'react-native';
import styles from './style';
import {COLORS} from '../../../constants/theme';

interface InputProps extends TextInputProps {
  placeholder?: string;
  background?: string;
  style?: TextStyle;
}

const Input: React.FC<InputProps> = ({
  placeholder = '',
  background,
  value,
  style,
  ...rest
}) => {
  return (
    <TextInput
      style={[styles.textinput, {backgroundColor: background, ...style}]}
      value={value}
      placeholderTextColor={COLORS.primary}
      {...rest}
      placeholder={placeholder}
    />
  );
};

export default Input;

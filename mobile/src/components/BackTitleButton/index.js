import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BackTitleButton({ ...props }) {
  return (
    <TouchableOpacity {...props}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  );
}

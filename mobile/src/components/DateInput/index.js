import React from 'react';
import { Platform } from 'react-native';
import DateInputAndroid from './index.android';
import DateInputIos from './index.ios';

export default function DateInput() {
  return Platform.OS === 'ios' ? DateInputIos : <DateInputAndroid />;
}

import React from 'react';
import { Background, BackTitleButton } from '~/components';

// import { Container } from './styles';

export default function SelectDateTime() {
  return <Background />;
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <BackTitleButton onPress={() => navigation.navigate('Provider')} />
  ),
});

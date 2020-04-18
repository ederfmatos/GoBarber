import React, { useMemo, useCallback } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Background, BackTitleButton } from '~/components';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';
import api from '~/services/api';

export default function Confirm({ navigation }) {
  const provider = useMemo(() => navigation.getParam('provider'), [navigation]);
  const time = useMemo(() => navigation.getParam('time'), [navigation]);

  const timeFormatted = useMemo(
    () =>
      formatRelative(parseISO(time), new Date(), {
        locale: pt,
      }),
    [time],
  );

  const handleAddAppointment = useCallback(async () => {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }, [provider, time]);

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/50/${provider.name}.png`,
          }}
        />

        <Name>{provider.name}</Name>
        <Time>{timeFormatted}</Time>

        <SubmitButton onPress={handleAddAppointment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => <BackTitleButton onPress={() => navigation.goBack()} />,
});

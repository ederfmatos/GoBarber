import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Background, BackTitleButton, DateInput } from '~/components';

import { Container, HourList, Hour, Title } from './styles';
import api from '~/services/api';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = useMemo(() => navigation.getParam('provider'), []);

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(response.data);
    }

    loadAvailable();
  }, [date, provider.id]);

  const handleSelectTime = useCallback(
    time =>
      navigation.navigate('Confirm', {
        provider,
        time,
      }),
    [],
  );

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          keyExtractor={({ time }) => time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => handleSelectTime(item.value)}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => <BackTitleButton onPress={() => navigation.goBack()} />,
});

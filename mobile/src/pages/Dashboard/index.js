import React, { useEffect, useState, useCallback } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import { Background, Appointment } from '~/components';
import { Container, Title, List } from './styles';

function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!isFocused) return;

    async function loadAppointments() {
      const response = await api.get('/appointments');
      setAppointments(response.data);
    }

    loadAppointments();
  }, [isFocused]);

  const handleCancel = useCallback(
    async id => {
      const response = await api.delete(`/appointments/${id}`);

      setAppointments(
        appointments.map(appointment =>
          appointment.id === id
            ? {
                ...appointment,
                canceled_at: response.data.canceled_at,
                cancelable: false,
              }
            : appointment,
        ),
      );
    },
    [appointments],
  );

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments.filter(
            appointment => appointment.cancelable || appointment.past,
          )}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment
              onCancel={() => handleCancel(item.id)}
              appointment={item}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);

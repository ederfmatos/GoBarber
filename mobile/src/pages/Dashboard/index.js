import React, { useEffect, useState, useCallback } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import { Background, Appointment } from '~/components';
import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('/appointments');
      setAppointments(response.data);
    }

    loadAppointments();
  }, []);

  const handleCancel = useCallback(async id => {
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
  }, []);

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
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

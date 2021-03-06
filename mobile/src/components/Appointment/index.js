import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { TouchableOpacity } from 'react-native';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ appointment, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(appointment.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [appointment.date]);

  return (
    <Container past={appointment.past}>
      <Left>
        <Avatar
          source={{
            uri: appointment.provider.avatar
              ? appointment.provider.avatar.url
              : `https://api.adorable.io/avatar/50/${appointment.provider.name}.png`,
          }}
        />

        <Info>
          <Name>{appointment.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {appointment.cancelable && !appointment.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}

import React, { useEffect, useState } from 'react';
import { Background, BackTitleButton } from '~/components';

import {
  Container,
  ProvidersList,
  Avatar,
  Name,
  ProviderContainer,
} from './styles';
import api from '~/services/api';

export default function Provider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');
      setProviders(response.data);
    }

    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => provider.id}
          renderItem={({ item: provider }) => (
            <ProviderContainer
              onPress={() =>
                navigation.navigate('SelectDateTime', { provider })
              }
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </ProviderContainer>
          )}
        />
      </Container>
    </Background>
  );
}

Provider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <BackTitleButton onPress={() => navigation.navigate('Dashboard')} />
  ),
});

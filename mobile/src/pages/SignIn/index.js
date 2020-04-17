import React from 'react';

import { Background, Input, Button } from '~/components';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Input
        icon="call"
        style={{ marginTop: 30 }}
        placeholder="Digite seu nome"
      />

      <Button>Clica</Button>
    </Background>
  );
}

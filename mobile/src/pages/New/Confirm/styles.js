import styled from 'styled-components/native';
import { Button } from '~/components';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  color: #fff;
`;

export const Time = styled.Text`
  font-size: 18px;
  margin-top: 4px;
  color: #ffffff77;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;

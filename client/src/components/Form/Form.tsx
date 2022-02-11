import React from 'react';
import { Button, Container, Input, Text, Wrapper } from './Form.styles';

export interface FormProps {
  onSubmit: React.FormEventHandler;
}

export default function Form(props: FormProps) {
  const { onSubmit } = props;

  return (
    <Wrapper>
      <Container>
        <form onSubmit={onSubmit}>
          <Text>Chat App</Text>
          <Input name='username' placeholder='Username' />
          <Input name='room' placeholder='Room' />
          <Button type='submit'>Join a room</Button>
        </form>
      </Container>
    </Wrapper>
  );
}

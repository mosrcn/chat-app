import React from 'react';
import useChat from '../../hooks/useChat';
import {
  Body,
  Container,
  Footer,
  Header,
  IconButton,
  Input,
  InputWrapper,
  Wrapper,
} from './styles';
import { MdSend } from 'react-icons/md';
import ScrollToBottom from '../../components/ScrollToBottom';
import Message from '../../components/Message';
import { useRouter } from 'next/router';

export default function Chat() {
  const router = useRouter();
  const username = router.query.username as string;
  const room = router.query.room as string;
  const { messages, sendMessage } = useChat({ username, room });

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { message } = e.currentTarget;
    sendMessage(message.value);
    e.currentTarget.reset();
  };

  return (
    <Wrapper>
      <Container>
        <Header>Live Chat</Header>
        <Body>
          <ScrollToBottom>
            {messages.map((message, index) => (
              <Message
                key={index}
                body={message.body}
                sender={message.sender}
                date={new Date(message.sentAt)}
                isSelf={message.sender === username}
              />
            ))}
          </ScrollToBottom>
        </Body>
        <Footer>
          <form onSubmit={handleSendMessage}>
            <InputWrapper>
              <Input name='message' />
              <IconButton>
                <MdSend />
              </IconButton>
            </InputWrapper>
          </form>
        </Footer>
      </Container>
    </Wrapper>
  );
}

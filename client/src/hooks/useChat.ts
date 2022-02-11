import { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

interface IMessage {
  room: string;
  body: string;
  sender: string;
  createdAt: Date;
}

interface useChatProps {
  room: string;
  username: string;
}

// const socket = io('http://localhost:4000');

const useChat = (props: useChatProps) => {
  const { room, username } = props;
  const [messages, setMessages] = useState<Array<any>>([]);
  const socket = useRef<Socket>();

  useEffect(() => {
    socket.current = io('http://localhost:4000');
    socket.current.emit('join-room', { room, username });
    socket.current.on('new-message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [room, username]);

  const sendMessage = (text: string) => {
    socket.current?.emit('send-message', text);
  };

  return {
    username,
    messages,
    sendMessage,
  };
};
export default useChat;

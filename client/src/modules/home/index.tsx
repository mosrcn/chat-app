import { useRouter } from 'next/router';
import React from 'react';
import Form from '../../components/Form';

export default function Home() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { room, username } = e.currentTarget;
    router.push({
      pathname: '/chat',
      query: {
        username: username.value,
        room: room.value,
      },
    });
  };

  return <Form onSubmit={handleSubmit} />;
}

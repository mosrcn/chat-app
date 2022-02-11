import dayjs from 'dayjs';
import React from 'react';
import { Wrapper } from './Message.styles';

export interface MessageProps {
  body: string;
  date: string | Date;
  sender?: string;
  isSelf?: boolean;
}

export default function Message(props: MessageProps) {
  const { body, date, sender, isSelf = false } = props;

  return (
    <Wrapper className={isSelf ? 'right' : 'left'}>
      <div className='message-sender'>{sender}</div>
      <div className='message-container'>
        <div className='message-text'>{body}</div>
        {date && <div className='message-date'>{dayjs(date).format('HH:mm')}</div>}
      </div>
    </Wrapper>
  );
}

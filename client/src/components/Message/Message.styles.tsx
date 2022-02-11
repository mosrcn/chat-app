import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0.5rem 0;

  .message-container {
    display: flex;
    align-items: end;
  }
  .message-container .message-text {
    padding: 0.5rem 1rem;
    border-radius: 16px;
    color: #fff;
    max-width: 150px;
    word-break: break-word;
  }
  .message-container .message-date {
    font-size: 0.75rem;
    margin: 0 4px;
  }
  .message-sender {
    font-size: 0.75rem;
  }
  &.left .message-container {
    justify-content: start;
    flex-direction: row;
  }
  &.right .message-container {
    justify-content: end;
    flex-direction: row-reverse;
  }
  &.left .message-text {
    background: #81bbfc;
  }
  &.right .message-text {
    background: #fc8481;
  }
  &.left .message-sender {
    text-align: start;
  }
  &.right .message-sender {
    text-align: end;
    display: none;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled.div`
  height: 450px;
  width: 300px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #000;
`;

export const Header = styled.div`
  padding: 0.75rem 1rem;
  color: #fff;
  background: #263238;
  font-size: 1.1rem;
`;

export const Body = styled.div`
  flex: 1;
  padding: 0 0.5rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Footer = styled.div`
  padding: 0.5rem 1rem;
  background: #81bbfc;

  form {
    display: flex;
    align-items: center;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 2.5rem;
  box-sizing: border-box;
  border-radius: 2rem;
  border: none;
`;

export const IconButton = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  background: unset;
  cursor: pointer;
  transition: background 0.2s ease;
  color: #81bbfc;

  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 300px;
  padding: 2rem;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Text = styled.div`
  font-size: 2rem;
  color: #81bbfc;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: 2rem;
  margin-bottom: 1rem;
  transition: all 0.2s ease;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: 2rem;
  border: none;
  transition: all 0.2s ease;
  background: #81bbfc;
  color: #fff;

  &:hover {
    background: #0673ee;
  }
`;

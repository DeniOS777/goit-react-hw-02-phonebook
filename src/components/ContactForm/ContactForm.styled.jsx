import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  width: 300px;
  border: 1px solid #000;
  border-radius: 3px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
  letter-spacing: 0.03em;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 2px 10px;
  font-size: 16px;
  letter-spacing: 0.03em;
  border: 1px solid #888888;
  border-radius: 3px;

  &::placeholder {
    font-size: 14px;
    color: #2a2a2a;
    letter-spacing: 0.03em;
  }
`;

export const AddContact = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #0f860f;
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.25s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  :focus {
    background-color: #0e7e0e;
  }

  &:active {
    transform: scale(0.97);
  }
`;

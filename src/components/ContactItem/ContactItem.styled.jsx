import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactName = styled.p`
  font-size: 18px;
`;

export const ContactDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #ffffff;
  border-style: none;
  background-color: #c91c1c;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.25s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.15s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  :focus {
    background-color: #b81717;
  }

  &:active {
    transform: scale(0.97);
  }
`;

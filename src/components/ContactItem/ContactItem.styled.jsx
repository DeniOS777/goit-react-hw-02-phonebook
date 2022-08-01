import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactName = styled.p`
  font-size: 16px;
`;

export const ContactDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 7px;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #ffffff;
  border-style: none;
  background-color: #c91c1c;
  border-radius: 3px;
  filter: drop-shadow(0px 1px 1px #303030);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.15s ease-in-out;

  &:hover,
  :focus {
    background-color: #b81717;
  }

  &:active {
    transform: scale(0.97);
  }
`;

import styled from 'styled-components';

export const FilterLabel = styled.p`
  margin-bottom: 3px;
  letter-spacing: 0.02em;
`;

export const InputSearch = styled.input`
  margin-right: 5px;
  margin-bottom: 15px;
  padding: 2px 10px;
  font-size: 16px;
  letter-spacing: 0.03em;
  border: 1px solid #888888;
  border-radius: 5px;

  &::placeholder {
    font-size: 14px;
    color: #2a2a2a;
    letter-spacing: 0.03em;
  }
`;

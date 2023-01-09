import styled from "styled-components";

export const Description = styled.p`
  color: #B7B7B7;
  font-size: 17px;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const EditInput = styled.input`
  background: #FFF;
  width: 100%;
  border: none;
  border-radius: 0.3rem;
  font-family: 'Lato', sans-serif;
  padding: 0.4rem;
  opacity: ${(props) => (props.enabled ? '1' : '0.7')};
  caret-color: ${(props) => (props.enabled) ? 'initial' : 'transparent'};
  cursor: ${(props) => (props.enabled ? 'initial' : 'default')};

  :focus {
    outline: none;
  }
`;

export const EditForm = styled.form`
  width: 100%;
  border: none;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;

  :focus {
    outline: none;
  }
`;
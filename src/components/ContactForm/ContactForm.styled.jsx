import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 500px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #e8e9eb;
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
`;

export const Input = styled(Field)`
  max-width: 300px;
  outline: transparent;
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  

  &::placeholder {
    font-size: 14px;
    color: #d16161;
  }
`;
export const ErrWrapper = styled.span`
  font-size: 14px;
  color: red;
  position: absolute;
  bottom: -20px;
`;

export const Button = styled.button`
  display: block;
  font-size: 16px;
  width: 150px;
  border: 1px solid #bfbacc;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;


  &:disabled {
    background-color: #ffffff;
    color: #dbb4b4;
    cursor: auto;
  }
`;

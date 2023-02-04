import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  AddForm,
  InputLabel,
  Button,
  Input,
  ErrWrapper,
} from './ContactForm.styled';

const initialsValues = {
  name: '',
  number: '',
};

const FormSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.number().required(),
});

export default function ContactForm({ onSubmitForm }) {
  const handleSubmitForm = (values, { resetForm }) => {
    onSubmitForm(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialsValues}
      onSubmit={handleSubmitForm}
      validationSchema={FormSchema}
    >
      <AddForm>
        <InputLabel>
          Name
          <Input type="text" name="name" placeholder="Enter name" />
          <ErrWrapper>
            <ErrorMessage name="name" />
          </ErrWrapper>
        </InputLabel>
        <InputLabel>
          Number
          <Input type="tel" name="number" placeholder="Enter number" />
          <ErrWrapper>
            <ErrorMessage name="number" />
          </ErrWrapper>
        </InputLabel>
        <Button type="submit">Add contact</Button>
      </AddForm>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

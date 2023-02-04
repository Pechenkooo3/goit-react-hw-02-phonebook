import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage} from 'formik';
import * as yup from 'yup';
// import 'yup-phone';
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

export default function ContactForm({ onSubmitForm, contacts }) {
  const handleSubmitForm = (values, { resetForm }) => {
    const existingUsers = contacts.map(contact => contact.name);

    if (existingUsers.includes(values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    onSubmitForm(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialsValues}
      onSubmit={handleSubmitForm}
      validationSchema={FormSchema}
    >
      {props => (
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
          <Button
            type="submit"
            disabled={
              (props.values.name !== '') & (props.values.number !== '')
                ? false
                : true
            }
          >
            Add contact
          </Button>
        </AddForm>
      )}
    </Formik>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

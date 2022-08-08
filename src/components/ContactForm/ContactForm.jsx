import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

const NAME_MATCH = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const nameError = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const nameNumber = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";
const requiredError = 'This field is required'
 const SignupSchema = object().shape({
   name: string()
     .required(requiredError)
     .matches(NAME_MATCH, nameError),
   number: string()
     .required(requiredError)
     .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, nameNumber),
 });

const FormError = ({name}) => {
  return (
    <ErrorMessage name={name} render={message => Notify.failure(message)} />
  )
 }

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={{
      name: '',
      number: '',
    }}
      validationSchema={SignupSchema}
    >
      <Form className={style.form} onSubmit={onSubmit}>
        <label className={style.label} htmlFor="name">Name</label>
        <Field
          className={style.input}
          id="name"
          type="text"
          name="name"
          pattern={NAME_MATCH}
          placeholder="Name"
          required
        />
        <FormError name="name" />
        <label className={style.label} htmlFor="number">Number</label>
        <Field
          className={style.input}
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Number"
          required
        />
        <FormError name="number" />
        <button className={style.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;
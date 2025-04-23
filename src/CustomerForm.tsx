import { useFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import { useAppSelector } from './store/hooks';

interface CustomerFormProps {}

interface CustomerFormModel {
  id?: number | string;
  firstName?: string;
  lastName?: string;
  cifNumber?: string;
  isPremium: boolean;
}

const CustomerForm: React.FunctionComponent<CustomerFormProps> = (
  props: CustomerFormProps
) => {
  const formikInstance = useFormik<CustomerFormModel>({
    initialValues: {
      id: '',
      firstName: '',
      lastName: '',
      cifNumber: '',
      isPremium: false,
    },
    onSubmit: (formData) => {
      console.log('form submitted', formData);
    },
    validationSchema: Yup.object({
      id: Yup.number().required('Id is required'),
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      cifNumber: Yup.string()
        .required('CIF Number is required')
        .matches(
          /^[0-9]{4}[A-Z]{3}[0-9]{4}$/,
          'Should be of the pattern NNNNSSSNNNN'
        ),
    }),
  });

  const user = useAppSelector((s) => s.user);

  return (
    <>
      <p>Username: {user.username}</p>
      <p>Token: {user.token}</p>
      <hr />
      <form onSubmit={formikInstance.handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='id' className='form-label'>
            Customer Id
          </label>
          <input
            type='text'
            className='form-control'
            id='id'
            aria-describedby='idHelp'
            name='id'
            value={formikInstance.values.id}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.touched.id && formikInstance.errors.id ? (
            <div id='idHelp' className='text-danger form-text'>
              {formikInstance.errors.id}
            </div>
          ) : null}
        </div>
        <div className='mb-3'>
          <label htmlFor='firstName' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            className='form-control'
            id='firstName'
            name='firstName'
            value={formikInstance.values.firstName}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.touched.firstName &&
          formikInstance.errors.firstName ? (
            <div id='idHelp' className='text-danger form-text'>
              {formikInstance.errors.firstName}
            </div>
          ) : null}
        </div>
        <div className='mb-3'>
          <label htmlFor='lastName' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            className='form-control'
            id='lastName'
            name='lastName'
            value={formikInstance.values.lastName}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.touched.lastName && formikInstance.errors.lastName ? (
            <div id='idHelp' className='text-danger form-text'>
              {formikInstance.errors.lastName}
            </div>
          ) : null}
        </div>
        <div className='mb-3'>
          <label htmlFor='cifNumber' className='form-label'>
            CIF Number
          </label>
          <input
            type='text'
            className='form-control'
            id='cifNumber'
            name='cifNumber'
            value={formikInstance.values.cifNumber}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.touched.cifNumber &&
          formikInstance.errors.cifNumber ? (
            <div id='idHelp' className='text-danger form-text'>
              {formikInstance.errors.cifNumber}
            </div>
          ) : null}
        </div>
        <div className='mb-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='isPremium'
            name='isPremium'
            checked={formikInstance.values.isPremium}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          <label className='form-check-label' htmlFor='isPremium'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
};

export default CustomerForm;

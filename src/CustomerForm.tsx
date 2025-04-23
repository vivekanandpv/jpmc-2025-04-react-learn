import * as React from 'react';

interface CustomerFormProps {}

const CustomerForm: React.FunctionComponent<CustomerFormProps> = (
  props: CustomerFormProps
) => {
  return (
    <>
      <form>
        <div className='mb-3'>
          <label htmlFor='id' className='form-label'>
            Customer Id
          </label>
          <input
            type='number'
            className='form-control'
            id='id'
            aria-describedby='idHelp'
            name='id'
          />
          <div id='idHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
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
          />
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
          />
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
          />
        </div>
        <div className='mb-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='isPremium'
            name='isPremium'
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

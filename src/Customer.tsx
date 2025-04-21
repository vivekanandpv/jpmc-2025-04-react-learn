import * as React from 'react';

export interface CustomerInformation {
  firstName: string;
  lastName: string;
  cifNumber: string;
  isPremium?: boolean;
}

interface CustomerProps {
  customer: CustomerInformation;
  onSelect: (c: CustomerInformation) => void;
}

const Customer: React.FunctionComponent<CustomerProps> = (
  props: CustomerProps
) => {
  return (
    <>
      <div className='card mb-3' style={{ width: '18rem' }}>
        <div className='card-body'>
          <h5
            className={`card-title ${
              props.customer.isPremium ? 'text-primary' : ''
            }`}
          >
            Customer: {props.customer.firstName} {props.customer.lastName}
          </h5>
          <h6 className='card-subtitle mb-2 text-body-secondary'>
            CIF Number: {props.customer.cifNumber}
          </h6>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            className='btn btn-primary'
            onClick={() => props.onSelect(props.customer)}
          >
            Select
          </button>
        </div>
      </div>
    </>
  );
};

export default Customer;

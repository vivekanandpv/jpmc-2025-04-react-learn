import * as React from 'react';
import Customer, { CustomerInformation } from './Customer';
import data from './data.json';
import CustomerForm from './CustomerForm';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  const customers: CustomerInformation[] = data;

  const handleSelect = (customer: CustomerInformation) => {
    console.log('Selected', customer);
  };

  return (
    <>
      <div className='p-5'>
        <h2>Customer Management System</h2>
        <hr />
        <CustomerForm />
        <hr />

        {customers.map((c) => (
          <Customer customer={c} key={c.cifNumber} onSelect={handleSelect} />
        ))}
      </div>
    </>
  );
};

export default App;

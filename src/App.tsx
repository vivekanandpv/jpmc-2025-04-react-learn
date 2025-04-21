import * as React from 'react';
import Customer, { CustomerInformation } from './Customer';
import data from './data.json';
import ClassCounter from './ClassCounter';
import FuncCounter from './FuncCounter';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const customers: CustomerInformation[] = data;

  const handleSelect = (customer: CustomerInformation) => {
    console.log('Selected', customer);
  };

  const [visible, setVisible] = React.useState<boolean>(true);

  return (
    <>
      <div className='p-5'>
        <h2>Customer Management System</h2>
        <button
          className='btn btn-warning'
          onClick={() => setVisible((v) => !v)}
        >
          Toggle Counter
        </button>
        <hr />

        {/* {customers.map((c) => (
          <Customer customer={c} key={c.cifNumber} onSelect={handleSelect} />
        ))} */}

        {visible ? <FuncCounter /> : null}
      </div>
    </>
  );
};

export default App;

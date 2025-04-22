import * as React from 'react';
import Customer, { CustomerInformation } from './Customer';
import data from './data.json';
import ClassCounter from './ClassCounter';
import FuncCounter from './FuncCounter';
import WithAlertStyle from './Hoc';
import Sample from './Sample';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const customers: CustomerInformation[] = data;

  const handleSelect = (customer: CustomerInformation) => {
    console.log('Selected', customer);
  };

  const [visible, setVisible] = React.useState<boolean>(true);

  const AlertStyledCounter = WithAlertStyle(FuncCounter);

  const AlertStyledSample = WithAlertStyle(Sample);

  const AlertStyledCustomer = WithAlertStyle(Customer);

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

        {customers.map((c) => (
          <AlertStyledCustomer
            customer={c}
            key={c.cifNumber}
            onSelect={handleSelect}
          />
        ))}

        {/* {visible ? <AlertStyledCounter /> : null} */}
        {/* {visible ? <FuncCounter /> : null} */}

        {/* <AlertStyledSample /> */}
      </div>
    </>
  );
};

export default App;

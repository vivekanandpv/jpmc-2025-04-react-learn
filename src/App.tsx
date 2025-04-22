import * as React from 'react';
import Customer, { CustomerInformation } from './Customer';
import data from './data.json';
import ClassCounter from './ClassCounter';
import FuncCounter from './FuncCounter';
import WithAlertStyle from './Hoc';
import Sample from './Sample';

interface AppProps {}

const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [isOn, setIsOn] = React.useState(initialState);

  return [isOn, () => setIsOn((s) => !s)];
};

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const customers: CustomerInformation[] = data;

  const handleSelect = (customer: CustomerInformation) => {
    console.log('Selected', customer);
  };

  const [visible, toggle] = useToggle(true);

  return (
    <>
      <div className='p-5'>
        <h2>Customer Management System</h2>
        <button className='btn btn-warning' onClick={toggle}>
          Toggle Counter
        </button>
        <hr />

        {/* {customers.map((c) => (
          <AlertStyledCustomer
            customer={c}
            key={c.cifNumber}
            onSelect={handleSelect}
          />
        ))} */}

        {/* <Sample /> */}
        {visible ? <FuncCounter /> : null}
      </div>
    </>
  );
};

export default App;

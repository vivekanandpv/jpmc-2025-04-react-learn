import * as React from 'react';

interface FuncCounterProps {}

const FuncCounter: React.FunctionComponent<FuncCounterProps> = (
  props: FuncCounterProps
) => {
  const [counter, setCounter] = React.useState<number>(0);

  const increment = () => {
    setCounter((s) => s + 1);
  };

  React.useEffect(() => {
    console.log('counter updated');
  }, [counter]);

  React.useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('unmounted');
    };
  }, []);

  return (
    <>
      <h5>Function Counter: {counter}</h5>
      <button className='btn btn-primary me-4' onClick={increment}>
        Increment
      </button>
    </>
  );
};

export default FuncCounter;

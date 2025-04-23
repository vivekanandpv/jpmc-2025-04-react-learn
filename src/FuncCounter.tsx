import * as React from 'react';

interface FuncCounterProps {}

const useCounter = (
  initialValue: number,
  incrementFactor: number
): [number, () => void] => {
  const [counter, setCounter] = React.useState<number>(initialValue);

  return [counter, () => setCounter((c) => c + incrementFactor)];
};

const FuncCounter: React.FunctionComponent<FuncCounterProps> = () => {
  const [counter, increment] = useCounter(0, 2);

  React.useEffect(() => {
    console.log('counter updated');
  }, [counter]);

  React.useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('unmounted');
    };
  }, []);

  const reactElement = (
    <>
      <h5>Function Counter: {counter}</h5>
      <button className='btn btn-primary me-4' onClick={increment}>
        Increment
      </button>
    </>
  );

  console.log('Rendered', reactElement);

  return reactElement;
};

export default FuncCounter;

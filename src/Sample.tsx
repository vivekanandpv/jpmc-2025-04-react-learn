import React, { useEffect, useMemo, useState } from 'react';

const Sample = () => {
  const [index, setIndex] = useState(0);
  const [conversionFactor, setConversionFactor] = useState(1);

  const increment = () => {
    console.log('increment is executing');
    setIndex((v) => v + 1);
  };

  useEffect(() => {
    console.log('useEffect');
    setConversionFactor((v) => {
      if (index < 10) {
        return 1;
      } else {
        return 2;
      }
    });
  }, [index]);

  const expensiveFunction = (i) => {
    console.log('expensiveFunction is executing');
    return i * i * i;
  };

  const memoizedValue = useMemo(
    () => expensiveFunction(conversionFactor),
    [conversionFactor]
  );

  //  If it is not memoized, then the expensiveFunction keeps on executing...
  //  const nonMemoizedValue = expensiveFunction(conversionFactor);

  return (
    <>
      <h3>
        Sample Component: Index: {index}; Cube: {memoizedValue}
      </h3>
      <hr />

      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Sample;

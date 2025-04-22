import * as React from 'react';

interface SampleProps {}

const Sample: React.FunctionComponent<SampleProps> = (props: SampleProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null); //  Step 1:

  //  Step 3: Using the ref, execute the browser API
  React.useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <>
      {/* Step 2: Assign ref to the element */}
      <input type='text' className='form-control' ref={inputRef} />
    </>
  );
};

export default Sample;

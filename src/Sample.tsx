import * as React from 'react';
import DemoFn from './DemoFn';

export interface SampleProps {}

const Sample: React.FunctionComponent<SampleProps> = (props) => {
  return (
    <>
      <h4>Sample Component</h4>

      <DemoFn />
    </>
  );
};

export default Sample;

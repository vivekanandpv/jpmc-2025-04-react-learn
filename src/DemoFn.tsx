import * as React from 'react';
import { useAppTheme } from './AppTheme';

export interface DemoFnProps {}

const DemoFn: React.FunctionComponent<DemoFnProps> = () => {
  const theme = useAppTheme();

  return (
    <>
      <h3>Demo Function component: {theme}</h3>
      <hr />
    </>
  );
};

export default DemoFn;

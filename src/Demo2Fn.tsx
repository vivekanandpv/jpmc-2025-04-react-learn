import * as React from 'react';
import { useAppTheme, useSetAppTheme } from './AppTheme';

export interface DemoFnProps {}

const Demo2Fn: React.FunctionComponent<DemoFnProps> = () => {
  const theme = useAppTheme();
  const toggleTheme = useSetAppTheme();

  const intermediary = () => {
    toggleTheme();
  };

  return (
    <>
      <h3>Demo 2 Function component: {theme}</h3>
      <hr />

      <button className='btn btn-primary' onClick={intermediary}>
        Toggle Theme
      </button>
    </>
  );
};

export default Demo2Fn;

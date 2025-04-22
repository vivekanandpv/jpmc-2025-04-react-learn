import * as React from 'react';

const WithAlertStyle = (Component: React.FunctionComponent<any>) => {
  const DecoratedComponent = (props: any) => {
    return (
      <>
        <div className='alert alert-primary' role='alert'>
          <Component {...props} />
        </div>
      </>
    );
  };

  return DecoratedComponent;
};

export default WithAlertStyle;

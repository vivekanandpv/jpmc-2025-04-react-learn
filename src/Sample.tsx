import * as React from 'react';

interface SampleProps {}

const Sample: React.FunctionComponent<SampleProps> = (props: SampleProps) => {
  return (
    <>
      <h3>Document Here</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        deleniti adipisci sequi, ducimus culpa modi corrupti voluptas vel.
        Necessitatibus qui itaque atque sequi tempore quae minus deserunt
        doloremque architecto modi?
      </p>
    </>
  );
};

export default Sample;

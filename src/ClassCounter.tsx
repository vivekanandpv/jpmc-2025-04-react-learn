import React from 'react';

interface ClassCounterProps {}

interface ClassCounterState {
  counter: number;
}

class ClassCounter extends React.PureComponent<
  ClassCounterProps,
  ClassCounterState
> {
  state = { counter: 0 };

  increment = () => {
    this.setState((s, p) => {
      return {
        counter: s.counter + 1,
      };
    });
  };

  componentDidUpdate(): void {
    console.log('counter updated');
  }

  render() {
    return (
      <>
        <h5>Class Counter: {this.state.counter}</h5>
        <button className='btn btn-primary me-4' onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default ClassCounter;

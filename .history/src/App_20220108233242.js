import React, { useEffect, useState } from "react";

const App = (props) => {
  // const initialStates = {
  //   name: "",
  //   price: 1000,
  // };
  const [state, setState] = useState(props);
  // const [name, setName] = useState(props.name);
  // const [price, setPrice] = useState(props.price);
  const { name, price } = state;

  const reset = () => setState(props);

  useEffect(() => {
    console.log("This is like componentDidMount");
  }, []);

  useEffect(() => {
    console.log("This callback is for name only");
  }, [name]);

  return (
    <>
      <p>
        現在の{name}は、{price}です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={reset}>Reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};
export default App;

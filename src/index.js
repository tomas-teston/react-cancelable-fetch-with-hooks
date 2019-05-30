import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import useCancellablePromise from "./contexts/useCancellablePromise";

import "./styles.css";

function App() {
  const { cancellablePromise } = useCancellablePromise();

  const createPromise = () => {};

  const handleClick = () => {
    console.log("abro");
    const prueba = new Promise();
    const test = cancellablePromise(prueba);
    test.then(response => {
      console.log("respuesta: " + response);
    });
    test.cancel();
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="button" value="enviar" onClick={handleClick} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

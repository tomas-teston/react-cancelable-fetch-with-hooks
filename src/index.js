import React from "react";
import ReactDOM from "react-dom";
import useCancellablePromise from "./contexts/useCancellablePromise";

import "./styles.css";

function App() {
  const { handleTriggerFetch, handleSignalCancel } = useCancellablePromise();

  // const createPromise = () => {
  //   return fetch("https://tomini182.free.beeceptor.com/prueba", {
  //     mode: "cors",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*"
  //     }
  //   });
  // };

  // const handleClick = () => {
  //   console.log("Pidiendo");
  //   const prueba = createPromise();
  //   handleTriggerFetch();
  //   test.promise.then(response => {
  //     console.log("respuesta: " + response.status);
  //   });
  // };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="button" value="enviar" onClick={handleTriggerFetch} />
      <input type="button" value="abortar" onClick={handleSignalCancel} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

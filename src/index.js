import React from "react";
import ReactDOM from "react-dom";
import useCancellablePromise from "./contexts/useCancellablePromise";

import "./styles.css";

function App() {
  const { handleTriggerFetch, handleSignalCancel } = useCancellablePromise();

  return (
    <div className="App">
      <h1>Welcome to a basic example to abort Fetch requests</h1>
      <h3>
        Press the send button as many times as you want (the request response
        after 2 seconds). Pressing "Abort" will abort all pending requests
      </h3>
      <input type="button" value="Send" onClick={handleTriggerFetch} />
      <input type="button" value="Abort" onClick={handleSignalCancel} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

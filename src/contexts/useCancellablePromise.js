export default function useCancellablePromise() {
  let controller;

  const init = () => {
    controller = new window.AbortController();
  };

  init();

  const handleTriggerFetch = () => {
    debugger;
    fetch("https://tomini18.getsandbox.com/delay", {
      signal: controller.signal,
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(resp => {
        console.log("Ok:" + resp.status);
      })
      .catch(error => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Uh oh, an error!", error);
        }
      });
  };

  const handleSignalCancel = () => {
    controller.abort();
    init();
  };

  return { init, handleTriggerFetch, handleSignalCancel };
}

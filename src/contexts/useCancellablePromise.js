// export function makeCancelable(promise) {
//   let isCanceled = false;

//   const wrappedPromise = new Promise((resolve, reject) => {
//     promise
//       .then(val => (isCanceled ? console.log("cancelado") : resolve(val)))
//       .catch(error =>
//         isCanceled ? reject(new Error({ isCanceled })) : reject(error)
//       );
//   });

//   return {
//     promise: wrappedPromise,
//     cancel() {
//       isCanceled = true;
//     }
//   };
// }

// const createPromise = () => {
//   return fetch("https://tomini182.free.beeceptor.com/prueba", {
//     mode: "cors",
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     }
//   });
// };

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

  // test if the input argument is a cancelable promise generator
  // if (cancelable(emptyPromise).cancel === undefined) {
  //   throw new Error(
  //     "promise wrapper argument must provide a cancel() function"
  //   );
  // }

  // const promises = useRef();

  // useEffect(() => {
  //   promises.current = promises.current || [];
  //   return function cancel() {
  //     promises.current.forEach(p => p.cancel());
  //     promises.current = [];
  //   };
  // }, []);

  // function cancellablePromise(p) {
  //   const cPromise = cancelable(p);
  //   promises.current.push(cPromise);
  //   return cPromise;
  // }

  return { init, handleTriggerFetch, handleSignalCancel };
}

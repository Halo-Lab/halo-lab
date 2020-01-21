function debounce(fn, timeout) {
  let timeoutId = null;

  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        fn.apply(this, args);
        timeoutId = null;
      }, timeout);
    } else {
      fn.apply(this, args);

      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, timeout);
    }
  };
}

export default debounce;

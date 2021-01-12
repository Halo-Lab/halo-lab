const checkBrowser = () => {
  let isSafari = null;

  if (typeof window !== `undefined`) {
    isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === '[object SafariRemoteNotification]';
      })(
        !window.safari ||
          (typeof window.safari !== 'undefined' && window.safari.pushNotification),
      );
  }

  return { isSafari };
};

export default checkBrowser;

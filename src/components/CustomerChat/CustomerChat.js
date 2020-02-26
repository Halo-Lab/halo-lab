import React, { useEffect } from 'react';

let TIME = 2000;
let timeoutId = null;
let initialized = false;
let queue = [];

const config = {
  id: '546681475406388',
};

const initialize = callback => {
  if (initialized) {
    callback(window.FB);
  } else {
    queue.push(callback);

    if (!window.fbAsyncInit) {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: config.id,
          autoLogAppEvents: true,
          status: true,
          cookie: true,
          xfbml: false,
          version: 'v3.2',
        });

        initialized = true;

        queue.forEach(cb => cb(window.FB));
        queue = null;
      };

      // load Facebook SDK
      const url =
        window.localStorage.getItem('fb:debug') === 'true'
          ? 'xfbml.customerchat/debug.js'
          : 'xfbml.customerchat.js';

      const script = document.createElement('script');
      script.setAttribute('async', 'true');
      script.src = `https://connect.facebook.net/en_US/sdk/${url}`;
      document.body.appendChild(script);
    }
  }
};

const CustomerChat = () => {
  useEffect(() => {
    timeoutId = setTimeout(() => {
      initialize(FB => timeoutId && FB.XFBML.parse());
    }, TIME);

    return () => {
      clearTimeout(timeoutId);
      timeoutId = null;
    };
  }, []);

  return (
    <div
      id="facebookChat"
      className="fb-customerchat"
      attribution="setup_tool"
      page_id={config.id}
      greeting_dialog_display="hide"
      theme_color="#3719CA"
    />
  );
};

export default CustomerChat;

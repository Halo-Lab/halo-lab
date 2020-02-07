import React, { useEffect } from 'react';

const FacebookChat = () => {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v3.3',
      });
    };

    const script = document.createElement('script');
    script.setAttribute('async', 'true');
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    document.body.appendChild(script);

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    return () => {
      // const facebookChat = document.getElementById('facebookChat');
      // Should it be removed?
    };
  }, []);

  return (
    <div>
      <div
        id="facebookChat"
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="546681475406388"
        greeting_dialog_display="hide"
        theme_color="#3719CA"
      ></div>
    </div>
  );
};

export default FacebookChat;

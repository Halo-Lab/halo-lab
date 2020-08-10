import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const CustomerChat = () => {
  return (
    <FacebookProvider
      appId={process.env.GATSBY_FACEBOOK_APP_ID}
      chatSupport
      wait
    >
      <CustomChat
        pageId={process.env.GATSBY_FACEBOOK_PAGE_ID}
        greetingDialogDisplay="hide"
        themeColor="#3719CA"
      />
    </FacebookProvider>
  );
};

export default CustomerChat;

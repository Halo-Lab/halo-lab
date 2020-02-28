import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const config = {
  autoLogAppEvents: true,
  greetingDialogDisplay: 'hide',
  themeColor: '#3719CA',
  version: '3.3',
  xfbml: true,
};

const CustomerChat = () => {
  return (
    <MessengerCustomerChat
      pageId={process.env.GATSBY_FACEBOOK_PAGE_ID}
      appId={process.env.GATSBY_FACEBOOK_APP_ID}
      {...config}
    />
  );
};

export default CustomerChat;

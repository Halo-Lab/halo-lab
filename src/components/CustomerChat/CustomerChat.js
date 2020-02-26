import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const config = {
  // required -->
  appId: '',
  pageId: '546681475406388',
  // not required -->
  autoLogAppEvents: true,
  greetingDialogDisplay: 'hide',
  themeColor: '#3719CA',
  version: '3.3',
  xfbml: true,
};

const CustomerChat = () => {
  return <MessengerCustomerChat {...config} />;
};

export default CustomerChat;

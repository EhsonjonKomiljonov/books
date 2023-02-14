import React from 'react';
import { SendButtonStyle } from './send-button.styles';

export const SendButton = ({ btnText }) => {
  return (
    <>
      <SendButtonStyle type="submit">{btnText}</SendButtonStyle>
    </>
  );
};

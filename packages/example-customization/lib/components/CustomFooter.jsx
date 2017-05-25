import { replaceComponent } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const Footer = props => {
  return (
    <div></div>
  )
}

Footer.displayName = "Footer";

replaceComponent('Footer', Footer);

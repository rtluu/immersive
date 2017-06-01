import { Components, replaceComponent, withCurrentUser } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';

const Layout = ({currentUser, children}) =>
  <div className="wrapper" id="wrapper">

    <Components.HeadTags />

    {currentUser ? <Components.UsersProfileCheck currentUser={currentUser} documentId={currentUser._id} /> : null}

    <Components.Header />

    <div className="main">
      <div className="content">

        <Components.FlashMessages />

        <Components.Newsletter />

        {children}

      </div>

      <div className="guidelines">
        <h5 className="guidelines-header">GUIDELINES</h5>
        <div className="guidelines-inner">
          <h4 className="guidelines-title">Immersi.ve Info</h4>
          <p className="guidelines-text">We have created a community that is driven by sharing WebVR. Members ask questions and share what’s new.</p>
          <p className="guidelines-text">Read our guidelines <a href="#">here</a>.</p>
          <p className="guidelines-text">Just be nice we are a community. Reach out to us <a href="#">@immersive</a>.</p>
        </div>
      </div>
    </div>

    <Components.Footer />

  </div>

replaceComponent('Layout', Layout, withCurrentUser);

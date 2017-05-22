import React from 'react';
import { withCurrentUser, getSetting, Components, replaceComponent } from 'meteor/vulcan:core';

const Header = (props, context) => {

  const logoUrl = getSetting("logoUrl");
  const siteTitle = getSetting("title", "My App");
  const tagline = getSetting("tagline");

  return (
    <div className="header-wrapper">

      <header className="header">

        <Components.SearchForm/>

        <div className="nav">

          <div className="nav-user">
            {!!props.currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
          </div>

          <div className="nav-new-post">
            <Components.PostsNewButton/>
          </div>

        </div>

      </header>
    </div>
  )
}

Header.displayName = "Header";

Header.propTypes = {
  currentUser: React.PropTypes.object,
};

replaceComponent('Header', Header, withCurrentUser);

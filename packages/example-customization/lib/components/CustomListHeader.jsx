import { Components, replaceComponent } from 'meteor/vulcan:core';
import React from 'react';

const PostsListHeader = () => {

  return (
    <div className="posts-header">
      <div className="sub-head">DISCUSSION</div>
      <div className="posts-list-header">
        <div className="posts-list-header-categories">
          <Components.CategoriesList />
        </div>
        <Components.PostsViews />
      </div>
    </div>
  )
}

PostsListHeader.displayName = "PostsListHeader";

replaceComponent('PostsListHeader', PostsListHeader);

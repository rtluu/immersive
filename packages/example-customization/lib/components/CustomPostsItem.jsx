import { Components, getRawComponent, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Link } from 'react-router';
import Posts from "meteor/vulcan:posts";

class CustomPostsItem extends getRawComponent('PostsItem') {

  render() {

    const post = this.props.post;

    let postClass = "posts-item";

    if (post.sticky) postClass += " posts-sticky";

    // ⭐ custom code starts here ⭐
    if (post.color) {
      postClass += " post-"+post.color;
    }
    // ⭐ custom code ends here ⭐
    var isLink = Posts.getLink(post).indexOf('://');
    if( isLink === -1){
      var cutUrl = "";
    } else{
      var decodedUrl = decodeURIComponent(Posts.getLink(post));
      var cutUrl     = decodedUrl.split('url=http')[1] + '';
      cutUrl = cutUrl.split('://')[1] + '';
      cutUrl = cutUrl.split('/')[0] + '';
      cutUrl = "<span className='paren'>(</span>" + cutUrl + "<span className='paren'>)</span>";
    }

    return (
      <div className={postClass}>

        <div className="posts-item-vote">
          <Components.Vote collection={Posts} document={post} currentUser={this.props.currentUser}/>
        </div>

        <div className="posts-item-comments">
          <Link to={Posts.getPageUrl(post)}>
            <div className="comment-button">
              <div className="comment-icon" />
              <FormattedMessage className="vote-count" id="comments.count" values={{count: post.commentCount}}/>
            </div>
          </Link>
        </div>

        {post.thumbnailUrl ? <Components.PostsThumbnail post={post}/> : null}

        <div className="posts-item-content">

          <h3 className="posts-item-title">
            <Link to={Posts.getLink(post)} className="posts-item-title-link" target={Posts.getLinkTarget(post)}>
              {post.title + " "}
              <div className="source-container">
                <div className="source">{cutUrl}</div>
              </div>
            </Link>
          </h3>

          <div className="posts-item-meta">
            <div className="posts-item-date"><FormattedRelative value={post.postedAt}/></div>
            {post.user? <div className="posts-item-user"><Components.UsersAvatar user={post.user} size="small"/><Components.UsersName user={post.user}/></div> : null}
            {this.props.currentUser && this.props.currentUser.isAdmin ? <Components.PostsStats post={post} /> : null}
            {Posts.options.mutations.edit.check(this.props.currentUser, post) ? this.renderActions() : null}
          </div>

        </div>

        {this.renderCommenters()}


      </div>
    )
  }
}

replaceComponent('PostsItem', CustomPostsItem);

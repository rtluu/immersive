Package.describe({
  name: "example-customization"
});

Package.onUse( function(api) {

  api.use([
    'vulcan:core',
    'example-forum',

    'fourseven:scss@4.5.0',
  ]);

  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');

  api.addFiles([
    'lib/stylesheets/app.scss',
    'lib/stylesheets/header.scss',
    'lib/stylesheets/hide-components.scss',
    'lib/stylesheets/guidelines.scss',
    'lib/stylesheets/login-form.scss',
    'lib/stylesheets/posts.scss',
    'lib/stylesheets/submit-login-form.scss',
    'lib/stylesheets/submit-post.scss',
    'lib/stylesheets/user-profile.scss',
    'lib/utilities/global-variables.scss',
    'lib/utilities/mixins.scss'
  ], ['client']);

  api.addAssets([
    'lib/server/emails/customNewPost.handlebars',
    'lib/server/emails/customEmail.handlebars'
  ], ['server']);

});

Package.describe({
  name: 'viacdn:morris',
  summary: 'morris.js via CDN for Meteor',
  version: '0.0.1',
  git: 'https://github.com/dealable/meteor-morris-cdn.git'
});

Package.onUse(function(api) {
  api.use(['jquery@1.9.0', 'viacdn:raphael@2.1.0']);
  api.addFiles('load.js','client');
});

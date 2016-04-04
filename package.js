Package.describe({
  name: 'clinical:router-location',
  summary: 'Reactive urls that work in IE8/9 and modern browsers.',
  version: '2.1.0',
  git: 'https://github.com/clinical-meteor/clinical-router-location'
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('underscore');
  api.use('tracker');
  api.use('jquery');

  api.use('iron:core@1.0.11');
  api.imply('iron:core');

  api.use('clinical:router-url@2.1.0');

  api.use('appcache', {weak: true});

  api.add_files('lib/utils.js', 'client');
  api.add_files('lib/state.js', 'client');
  api.add_files('lib/location.js', 'client');

  api.export(['urlToHashStyle', 'urlFromHashStyle'], 'client', {testOnly: true});
});

Package.on_test(function (api) {
  api.use('clinical:router-location');
  api.use('tinytest');
  api.use('test-helpers');

  api.add_files('tests/tinytest/location_test.js', 'client');
});

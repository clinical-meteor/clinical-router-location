## clinical:router-location

Reactive urls that work with IE8/9 and modern pushState browsers.

===============================
#### Installation  

This package is a dependency of ``clinical:router``.  Just install the router package, and you'll get this included.

````bash
meteor add clinical:router
````


===============================
#### Usage  

```javascript
Tracker.autorun(function () {
  // returns a "location" like object with all of the url parts
  var current = Iron.Location.get();

  var auth = current.auth;
  var path = current.path;
  var state = current.state;
  var port = current.port;
  // etc
});
```


===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

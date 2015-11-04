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
Deps.autorun(function () {
  // returns a "location" like object with all of the url parts
  var current = Iron.Location.get();

  var href = current.href;
  var state = current.state;
  var host = current.host;
  // etc
});
```


===============================
#### Licensing  

MIT.  Use as you will.

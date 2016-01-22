## Zebra_Cookie

####An extremely small (~500 bytes minified) jQuery plugin for writing, reading and deleting cookies

##Features

- easily write, read and delete cookies
- very simple and intuitive syntax, blending perfectly with jQuery
- extremely small: with around 500 bytes when minified is probably the smallest and most optimized jQuery plugin for handling cookies

##Requirements

**Zebra_Cookie** requires jQuery 1.0+

##How to use

Zebra_Cookie is available as a [Bower](http://bower.io/) package. To install it use:

```
bower install zebra_cookie
```

Zebra_Cookie is also available as a [npm](https://www.npmjs.com/) package. To install it use:

```
npm install zebra_cookie
```

Load the latest version of jQuery from a CDN and provide a fallback to a local source, like:

```html
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script>window.jQuery || document.write('<script src="path/to/jquery-1.12.0.js"><\/script>')</script>
```
Load the Zebra_Cookie plugin

```html
<script type="text/javascript" src="path/to/zebra_cookie.js"></script>
```

Usage

```javascript
// inside the DOM-ready function
// a "cookie" object will be available in jQuery’s namespace
// the object exposes 3 methods that you can use to write, read and delete cookies
$(document).ready(function() {

    // create a session cookie (expires when the browser closes)
    $.cookie.write('cookie_name', 'cookie_value');

    // create a cookie that expires in 1 day
    $.cookie.write('cookie_name', 'cookie_value', 24 * 60 * 60);

    // read a cookie’s value
    // following the examples above, this should return "cookie_value"
    $.cookie.read('cookie_name');

    // the "read" method returns null if the cookie doesn’t exist
    $.cookie.read('non_existing_cookie_name');

    // delete the cookie
    $.cookie.destroy('cookie_name');

});
```

Detailed description of available methods can be found on the **[project's homepage](http://stefangabos.ro/jquery/zebra-cookie/)**

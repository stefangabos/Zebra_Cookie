## Zebra_Cookie

An extremely small (~500 bytes minified) jQuery plugin for writing, reading and deleting cookies.

Features:

- easily write, read and delete cookies

- very simple and intuitive syntax, blending perfectly with jQuery

- extremely small: with around 500 bytes when minified is probably the smallest and most optimized jQuery plugin for handling cookies

## Usage

```javascript
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

    // delete a cookie
    $.cookie.destroy('cookie_name');

});
```

## Links

Author: [Stefan Gabos](http://stefangabos.ro/)

Project homepage: [Zebra_Cookie](http://stefangabos.ro/jquery/zebra_cookie/)
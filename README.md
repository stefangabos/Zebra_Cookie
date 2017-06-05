<img src="https://raw.githubusercontent.com/stefangabos/zebrajs/master/docs/images/logo.png" alt="zebrajs" align="right">

# Zebra_Cookie

*A ridiculously small (~500 bytes minified, ~400 bytes gzipped) jQuery plugin for writing, reading and deleting cookies*

[![npm](https://img.shields.io/npm/v/zebra_cookie.svg)](https://www.npmjs.com/package/zebra_cookie) [![Total](https://img.shields.io/npm/dt/zebra_cookie.svg)](https://www.npmjs.com/package/zebra_cookie) [![Monthly](https://img.shields.io/npm/dm/zebra_cookie.svg)](https://www.npmjs.com/package/zebra_cookie) [![License](https://img.shields.io/npm/l/zebra_cookie.svg)](https://www.npmjs.com/package/zebra_cookie)

## Support the development of this project

[![Donate](https://img.shields.io/badge/Be%20kind%20%7C%20Donate%20$3%20with%20-%20PayPal%20-brightgreen.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BB4S849EMJH48)

## Features

- very easy to write, read and delete cookies
- simple and intuitive syntax
- extremely small: with around 500 bytes when minified, it is probably the smallest and most optimized jQuery plugin for handling cookies

## Requirements

Zebra_Cookie has no dependencies other than jQuery 1.0+

## Installation

Zebra_Cookie is available as a [npm package](https://www.npmjs.com/package/zebra_cookie). To install it use:

```
npm install zebra_cookie
```

Zebra_Cookie is also available as a [Bower package](http://bower.io/). To install it use:

```
bower install zebra_cookie
```

## How to use

First, load jQuery from a CDN and provide a fallback to a local source like:

```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>window.jQuery || document.write('<script src="path/to/jquery-3.2.1.js"><\/script>')</script>
```

Load the Zebra_Cookie jQuery plugin:

```html
<script src="path/to/zebra_cookie.min.js"></script>
```

Alternatively, you can load Zebra_Cookie from [JSDelivr CDN](https://www.jsdelivr.com/) like this:
```html
<!-- for the most recent version -->
<script src="https://cdn.jsdelivr.net/gh/stefangabos/Zebra_Cookie/dist/zebra_cookie.min.js"></script>

<!-- for a specific version -->
<script src="https://cdn.jsdelivr.net/gh/stefangabos/Zebra_Cookie@1.1.0/dist/zebra_cookie.min.js"></script>

<!-- replacing "min" with "src" will serve you the non-compressed version -->
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

## Methods

### `destroy(name)`

Removes a cookie from the browser.

Returns `TRUE` on success or `FALSE` otherwise.

#### Arguments

`name` - the name of the cookie to remove

```javascript
// create a session cookie (expires when the browser closes)
$.cookie.write('cookie_name', 'cookie_value');

// delete the cookie
$.cookie.destroy('cookie_name');
```

### `read(name)`

Reads the value of a cookie.

Returns the value of the requested cookie or `null` if the cookie doesn't exist.

#### Arguments

`name` - the name of the cookie to read

```javascript
// create a session cookie (expires when the browser closes)
$.cookie.write('cookie_name', 'cookie_value');

// read a cookie's value
// following the examples above, this should return "cookie_value"
$.cookie.read('cookie_name');
```

### `write(name, value, [expire = 0], [path = /], [domain = ""], [secure = FALSE])`

Sets a cookie in the browser.

Returns `TRUE` if the cookie was successfully set, or `FALSE` otherwise.

#### Arguments

`name` - The name of the cookie to set

`value` - The value to set

`expire` - *(optional)* - The life time of the cookie, in seconds. If set to `0`, or omitted, the cookie will expire at the end of the session (when the browser closes).

`path` - *(optional)* - The path on the server in which the cookie will be available on. If set to `/`, the cookie will be available within the entire domain. If set to `/foo/`, the cookie will only be available within the `/foo/` directory and all subdirectories such as `/foo/bar/` of the domain. If omitted, it will be set to `/`.

`domain` - *(optional)* - The domain that the cookie will be available on. To make the cookie available on all sub-domains of `example.com`, domain should be set to to `.example.com`. The `.` (dot) is not required but makes it compatible with more browsers. Setting it to `www.example.com` will make the cookie available only in the `www` sub-domain.

`secure` - *(optional)* - Indicates whether cookie information should only be transmitted over a HTTPS connection. Default is `FALSE`.

```javascript
// create a session cookie (expires when the browser closes)
$.cookie.write('cookie_name', 'cookie_value');

// create a cookie that expires in 1 day
$.cookie.write('cookie_name', 'cookie_value', 24 * 60 * 60);

```

## Demo

See the [demos](http://stefangabos.github.io/Zebra_Cookie/)

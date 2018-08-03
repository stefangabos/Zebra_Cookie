<img src="https://raw.githubusercontent.com/stefangabos/zebrajs/master/docs/images/logo.png" alt="zebrajs" align="right">

# Zebra Cookie

*A ridiculously small (~500 bytes minified) JavaScript API for writing, reading and deleting browser cookies*

[![npm](https://img.shields.io/npm/v/zebra_cookie.svg)](https://www.npmjs.com/package/zebra_cookie) [![Total](https://img.shields.io/npm/dt/zebra_cookie.svg)](https://www.npmjs.com/package/zebra_cookie) [![Monthly](https://img.shields.io/npm/dm/zebra_cookie.svg)](https://www.npmjs.com/package/zebra_cookie) [![License](https://img.shields.io/npm/l/zebra_cookie.svg)](https://github.com/stefangabos/Zebra_Cookie/blob/master/LICENSE.md)

## Features

- very easy to write, read and delete cookies
- simple and intuitive syntax
- extremely small: with around 500 bytes when minified (350 bytes gzipped), it is probably the smallest and most optimized API for handling browser cookies

## Demo

See the [demos](https://stefangabos.github.io/Zebra_Cookie/)

## Installation

Zebra Cookie is available as a [npm package](https://www.npmjs.com/package/zebra_cookie). To install it use:

```bash
# the "--save" argument adds the plugin as a dependency in packages.json
npm install zebra_cookie --save
```

Zebra Cookie is also available as a [Bower package](http://bower.io/). To install it use:

```bash
# the "--save" argument adds the plugin as a dependency in bower.json
bower install zebra_cookie --save
```

## How to use

Load Zebra Cookie:

```html
<script src="path/to/zebra_cookie.min.js"></script>
```

Alternatively, you can load Zebra Cookie from [JSDelivr CDN](https://www.jsdelivr.com/package/npm/zebra_cookie) like this:

```html
<!-- for the most recent version, not recommended in production -->
<script src="https://cdn.jsdelivr.net/npm/zebra_cookie@latest/dist/zebra_cookie.min.js"></script>

<!-- for a specific version -->
<script src="https://cdn.jsdelivr.net/npm/zebra_cookie@2.0.0/dist/zebra_cookie.min.js"></script>

<!-- replacing "min" with "src" will serve you the non-compressed version -->
```

Usage

```javascript
// at this point "Cookie" object will be available in the global namespace
// the object exposes 3 methods that you can use to write, read and delete cookies

// create a session cookie (expires when the browser closes)
Cookie.write('cookie_name', 'cookie_value');

// create a cookie that expires in 1 day
Cookie.write('cookie_name', 'cookie_value', 24 * 60 * 60);

// read a cookie’s value
// following the examples above, this should return "cookie_value"
Cookie.read('cookie_name');

// the "read" method returns null if the cookie doesn’t exist
Cookie.read('non_existing_cookie_name');

// delete the cookie
Cookie.destroy('cookie_name');
```

## Methods

### `destroy(name)`

Removes a cookie from the browser.

Returns `TRUE` on success or `FALSE` otherwise.

#### Arguments

`name` - the name of the cookie to remove

```javascript
// create a session cookie (expires when the browser closes)
Cookie.write('cookie_name', 'cookie_value');

// delete the cookie
Cookie.destroy('cookie_name');
```

### `read(name)`

Reads the value of a cookie.

Returns the value of the requested cookie or `null` if the cookie doesn't exist.

#### Arguments

`name` - the name of the cookie to read

```javascript
// create a session cookie (expires when the browser closes)
Cookie.write('cookie_name', 'cookie_value');

// read a cookie's value
// following the examples above, this should return "cookie_value"
Cookie.read('cookie_name');
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
Cookie.write('cookie_name', 'cookie_value');

// create a cookie that expires in 1 day
Cookie.write('cookie_name', 'cookie_value', 24 * 60 * 60);

```

## Support the development of this project

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BB4S849EMJH48)

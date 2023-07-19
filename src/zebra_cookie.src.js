/**
 *  Zebra_Cookie
 *
 *  A ridiculously small (~500 bytes minified) JavaScript API for writing, reading and deleting browser cookies
 *
 *  Read more {@link https://github.com/stefangabos/Zebra_Cookie/ here}
 *
 *  @author     Stefan Gabos <contact@stefangabos.ro>
 *  @version    2.0.0 (last revision: August 05, 2018)
 *  @copyright  (c) 2011 - 2018 Stefan Gabos
 *  @license    http://www.gnu.org/licenses/lgpl-3.0.txt GNU LESSER GENERAL PUBLIC LICENSE
 *  @package    Zebra_Cookie
 */
var Zebra_Cookie = function() {

        'use strict';

        /**
         *  Removes a cookie from the browser.
         *
         *  <code>
         *  // create a cookie that expires in 10 minutes
         *  // named "foo" and having "bar" as value
         *  Cookie.write('foo', 'bar', 10 * 60);
         *
         *  // remove the cookie named "foo" from the browser
         *  Cookie.destroy('foo');
         *  </code>
         *
         *  @param  string  name    The name of the cookie to remove.
         *
         *  @return boolean         Returns TRUE on success or FALSE otherwise.
         */
        this.destroy = function(name) {

            // remove the cookie by setting its expiration date in the past
            return this.write(name, '', -1);

        };

        /**
         *  Reads the value of a cookie.
         *
         *  <code>
         *  // create a session cookie (expires when the browser is closed)
         *  // named "foo" and having "bar" as value
         *  Cookie.write('foo', 'bar');
         *
         *  // should show an alert box saying "bar"
         *  alert(Cookie.read('foo'));
         *  </code>
         *
         *  @param  string  name    The name of the cookie to read.
         *
         *  @return mixed           Returns the value of the requested cookie or null if the cookie doesn't exist.
         */
        this.read = function(name) {

            var

                // prepare the regular expression used to find the sought cookie in document.cookie
                expression = new RegExp('(^|; )' + encodeURIComponent(name) + '=(.*?)($|;)'),

                // search for the cookie and its value
                matches = document.cookie.match(expression);

            // return the cookie's value
            return matches ? decodeURIComponent(matches[2]) : null;

        };

        /**
         *  Sets a cookie in the browser.
         *
         *  <code>
         *  // create cookie that expires in 1 minute (60 seconds)
         *  // named "foo" and having "bar" as value
         *  Cookie.write('foo', 'bar', 60);
         *  </code>
         *
         *  @param  string  name        The name of the cookie
         *
         *  @param  string  value       The value to set
         *
         *  @param  integer expire      (Optional) The life time of the cookie, in seconds.
         *
         *                              If set to 0, or omitted, the cookie will expire at the end of the session (when the
         *                              browser closes).
         *
         *  @param  string path         (Optional) The path on the server in which the cookie will be available on. If set
         *                              to "/", the cookie will be available within the entire domain. If set to '/foo/', the
         *                              cookie will only be available within the /foo/ directory and all subdirectories such
         *                              as /foo/bar/ of domain.
         *
         *                              If omitted, it will be set to "/".
         *
         *  @param  string  domain      (Optional) The domain that the cookie will be available on.
         *
         *                              To make the cookie available on all subdomains of example.com, domain should be set
         *                              to to ".example.com". The . (dot) is not required but makes it compatible with more
         *                              browsers. Setting it to "www.example.com" will make the cookie available only in the
         *                              www subdomain.
         *
         *  @param  boolean secure      (Optional) Indicates whether cookie information should only be transmitted over a
         *                              HTTPS connection.
         *
         *                              Default is FALSE.
         *
         *  @return boolean             Returns TRUE if the cookie was successfully set, or FALSE otherwise.
         */
        this.write = function(name, value, expire, path, domain, secure) {

            var date = new Date();

            // if "expire" is a number, set the expiration date to as many seconds from now as specified by "expire"
            if (expire && typeof expire === 'number') date.setTime(date.getTime() + expire * 1000);

            // if "expire" is not specified or is a bogus value, set it to "null"
            else expire = null;

            // set the cookie
            return (document.cookie =

                // set the name/value pair
                // and also make sure we escape some special characters in the process
                encodeURIComponent(name) + '=' + encodeURIComponent(value) +

                // if specified, set the expiry date
                (expire ? '; expires=' + date.toGMTString() : '') +

                // if specified, set the path on the server in which the cookie will be available on
                '; path=' + (path || '/') +

                // if specified, set the the domain that the cookie is available on
                (domain ? '; domain=' + domain : '') +

                // if required, set the cookie to be transmitted only over a secure HTTPS connection from the client
                (secure ? '; secure' : ''));

        };

    },

    Cookie = new Zebra_Cookie();

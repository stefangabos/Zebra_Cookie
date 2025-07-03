/**
 *  Zebra_Cookie
 *
 *  A ridiculously small (1KB minified) JavaScript API for writing, reading and deleting browser cookies
 *
 *  Not working in older, pre-2018 browsers like IE11 and older Safari.
 *
 *  This library cannot set HttpOnly cookies due to JavaScript security limitations. HttpOnly cookies can only be set
 *  server-side and are not accessible to JavaScript (which is their intended security feature).
 *
 *  Read more {@link https://github.com/stefangabos/Zebra_Cookie/ here}
 *
 *  @author     Stefan Gabos <contact@stefangabos.ro>
 *  @version    4.0.0 (last revision: July 03, 2025)
 *  @copyright  (c) 2011 - 2025 Stefan Gabos
 *  @license    http://www.gnu.org/licenses/lgpl-3.0.txt GNU LESSER GENERAL PUBLIC LICENSE
 *  @package    Zebra_Cookie
 */
var Cookie = (function() {

    'use strict';

    function Zebra_Cookie() {

        // cookie size limit as per RFC 6265
        var MAX_COOKIE_SIZE = 4096;

        /**
        *   Removes a cookie from the browser.
        *
        *   <code>
        *   // create a cookie that expires in 10 minutes
        *   // named "foo" and having "bar" as value
        *   Cookie.write('foo', 'bar', 10 * 60);
        *
        *   // remove the cookie named "foo" from the browser
        *   Cookie.destroy('foo');
        *   </code>
        *
        *   @param  string  name    The name of the cookie to remove.
        *
        *   @return boolean         Returns TRUE on success or FALSE otherwise.
        */
        this.destroy = function(name) {

            // remove the cookie by setting its expiration date in the past
            return this.write(name, '', -1);

        };

        /**
        *   Reads the value of a cookie.
        *
        *   <code>
        *   // create a session cookie (expires when the browser is closed)
        *   // named "foo" and having "bar" as value
        *   Cookie.write('foo', 'bar');
        *
        *   // should show an alert box saying "bar"
        *   alert(Cookie.read('foo'));
        *   </code>
        *
        *   @param  string  name    The name of the cookie to read.
        *
        *   @return mixed           Returns the value of the requested cookie or null if the cookie doesn't exist.
        */
        this.read = function(name) {

            var

                // prepare the regular expression used to find the sought cookie in document.cookie
                expression = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)'),

                // search for the cookie and its value
                matches = document.cookie.match(expression);

            // return the cookie's value
            return matches ? decodeURIComponent(matches[1]) : null;

        };

        /**
        *   Sets a cookie in the browser.
        *
        *   >   This library cannot set HttpOnly cookies due to JavaScript security limitations. HttpOnly cookies can
        *       only be set server-side and are not accessible to JavaScript (which is their intended security feature)
        *
        *   <code>
        *   // create cookie that expires in 1 minute (60 seconds)
        *   // named "foo" and having "bar" as value
        *   Cookie.write('foo', 'bar', 60);
        *   </code>
        *
        *   @param  string  name        The name of the cookie
        *
        *   @param  string  value       The value to set
        *
        *   @param  integer expire      (Optional) The life time of the cookie, in seconds.
        *
        *                               If set to 0, or omitted, the cookie will expire at the end of the session (when
        *                               the browser closes).
        *
        *   @param  string  path        (Optional) The path on the server in which the cookie will be available on. If set
        *                               to "/", the cookie will be available within the entire domain. If set to '/foo/',
        *                               the cookie will only be available within the /foo/ directory and all subdirectories
        *                               such as /foo/bar/ of domain.
        *
        *                               If omitted, it will be set to "/".
        *
        *   @param  string  domain      (Optional) The domain that the cookie will be available on.
        *
        *                               To make the cookie available on all subdomains of example.com, domain should be set
        *                               to to ".example.com". The . (dot) is not required but makes it compatible with more
        *                               browsers. Setting it to "www.example.com" will make the cookie available only in
        *                               the www subdomain.
        *
        *   @param§boolean  secure      (Optional/Automatic) Indicates whether cookie information should only be transmitted
        *                               over a HTTPS connection.
        *
        *                               Valid values are TRUE, FALSE and "" (empty string).
        *
        *                               Default is "" (an empty string) which will instruct the script to automatically
        *                               set this attribute to TRUE when the current page is https or FALSE otherwise.
        *
        *   @param  string  sameSite    (Optional) Controls when cookies are sent with cross-site requests, providing
        *                               protection against cross-site request forgery attacks.
        *
        *                               Possible values are
        *
        *                               - `Strict` - cookie is only sent in a first-party context (same-site requests only)
        *                               - `Lax` - cookie is sent with same-site requests and top-level navigation (links)
        *                               - `None` - cookie is sent with all cross-site requests (requires secure=true)
        *
        *                               Default is `Lax` to match modern browser behavior.
        *
        *                               >   When using `None`, the secure parameter must be set to TRUE!
        *
        *   @return boolean             Returns TRUE if the cookie was successfully set, or FALSE otherwise.
        *
        *                               Throws an error if the cookie name is invalid or if SameSite=None without secure=true.
        */
        this.write = function(name, value, expire = 0, path = '/', domain = '', secure = '', sameSite = 'Lax') {

            var date = new Date(), cookie;

            // make sure the name is valid and in accordance with RFC 6265
            if (typeof name !== 'string' || name.trim() === '' || !/^[!#$%&'*+\-.0-9A-Z^_`a-z|~]+$/i.test(name.trim())) throw new Error('Cookie name must be a non-empty string consisting of alphanumeric characters and !#$%&\'*+-.^_`|~');

            // if we need to automatically set it
            if (secure === '') secure = location.protocol === 'https:';

            // if `sameSite` is "None", `secure` must be "true"
            if (sameSite === 'None' && !secure) throw new Error('SameSite=None requires secure=true');

            // if "expire" is a number, set the expiration date to as many seconds from now as specified by "expire"
            if (expire && typeof expire === 'number') date.setTime(date.getTime() + expire * 1000);

            // create the cookie string
            cookie =

                // set the name/value pair
                // and also make sure we escape some special characters in the process
                encodeURIComponent(name) + '=' + encodeURIComponent(value) +

                // if specified, set the expiry date
                (expire ? '; expires=' + date.toUTCString() : '') +

                // if specified, set the expiry time (for modern browsers)
                (expire ? '; max-age=' + expire : '') +

                // if specified, set the path on the server in which the cookie will be available on
                '; path=' + path +

                // if specified, set the the domain that the cookie is available on
                (domain ? '; domain=' + domain : '') +

                // if required, set the cookie to be transmitted only over a secure HTTPS connection from the client
                (secure ? '; secure' : '') +

                // control when cookies are sent with cross-site requests
                (sameSite ? '; SameSite=' + sameSite : '');

            // trigger an error if the cookie's size exceeds the maximum allowed limit
            if (cookie.length > MAX_COOKIE_SIZE) throw new Error('Cookie size (' + cookie.length + ' bytes) exceeds the maximum allowed size (' + MAX_COOKIE_SIZE + ' bytes)');

            // set the cookie
            document.cookie = cookie;

            // since we can't verify cross-domain cookies, assume success
            return true;

        };

    }

    return new Zebra_Cookie();

})();

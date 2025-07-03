## version 4.0.0 (July 03, 2025)

- the library can now automatically set the `secure` attribute to `true` when on `https`
- added support for the `SameSite` attribute
- added support for the `max-age` attribute
- added cookie name validation as per RFC 6265
- added cookie size validation as per RFC 6265
- switched out deprecated method `toGMTString` with `toUTCString`
> the introduction of support for the `max-age` and `SameSite` attributes breaks compatibility with pre-2018 browsers like IE11 and older Safari - please use version 3.0.0 if you need to support those browsers

## version 3.0.0 (October 27, 2024)

- improved overall performance

## version 2.0.3 (May 07, 2024)

- minor maintenance update

## version 2.0.2 (May 07, 2024)

- minor maintenance update

## version 2.0.1 (July 19, 2023)

- minor update

## version 2.0.0 (August 05, 2018)

- removed jQuery dependency

## version 1.1.0 (June 05, 2017)

- new folder structure
- the home of the library is now exclusively on GitHub
- files required in the build process are not included anymore when installing via npm nor when downloading from GitHub

## version 1.0.7 (January 22, 2016)

- the library is now available as a [npm package](https://www.npmjs.com/package/zebra_cookie)
- fixes and additions to the bowser.json file, for better integration with [Bower](http://bower.io/)
- examples now use jQuery version 1.12.0
- dropped support for jQuery's deprectated official plugins repository

## version 1.0.2 (December 17, 2013)

- added "use strict" statement;
- added integration with [Grunt](http://gruntjs.com/)
- the library is now available as a [Bower](http://bower.io/) package

## version 1.0.1 (November 03, 2011)

- fixed a small bug where the "destroy" method was not returning anything
- minor additions to the source code comments

## version 1.0 (October 30, 2011)

- initial release

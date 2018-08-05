$(document).ready(function() {

    $('#example1').on('click', function() {

        Cookie.write('session_cookie', 'Hello, I am a session cookie. I will expire when the browser is closed');
        console.log(Cookie.read('session_cookie'));

    });

    $('#example2').on('click', function() {

        Cookie.write('expiring_cookie', 'Hello, I am a cookie that will expire in 86400 seconds (1 day)', 24 * 60 * 60);
        console.log(Cookie.read('expiring_cookie'));

    });

    $('#example3').on('click', function() {

        var example1 = Cookie.read('session_cookie');
        var example2 = Cookie.read('expiring_cookie');

        if (example1) console.log('Value of cookie from example 1 is: "' + example1 + '"');
        else console.log('"session_cookie" does not exist');

        if (example2) console.log('Value of cookie from example 2 is: "' + example2 + '"');
        else console.log('"expiring_cookie" does not exist');

    });

    $('#example4').on('click', function() {

        Cookie.destroy('session_cookie');
        console.log(Cookie.read('session_cookie'));

        Cookie.destroy('expiring_cookie');
        console.log(Cookie.read('Zebra_Cookie_Example3'));

    });

});

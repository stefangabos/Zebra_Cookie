$(document).ready(function() {

    $('#example1').on('click', function() {
        Cookie.write('Zebra_Cookie_Example1', 'Hello, I am Example1');
        console.log(Cookie.read('Zebra_Cookie_Example1'));
    });

    $('#example2').on('click', function() {
        Cookie.write('Zebra_Cookie_Example2', 'Hello, I am Example2', 24 * 60 * 60);
        console.log(Cookie.read('Zebra_Cookie_Example2'));
    });

    $('#example3').on('click', function() {
        var example1 = Cookie.read('Zebra_Cookie_Example1');
        var example2 = Cookie.read('Zebra_Cookie_Example2');

        if (example1) console.log('Value of cookie from example 1 is: "' + example1 + '"');
        else console.log('"Zebra_Cookie_Example1" does not exist');

        if (example2) console.log('Value of cookie from example 2 is: "' + example2 + '"');
        else console.log('"Zebra_Cookie_Example2" does not exist');
    });

    $('#example4').on('click', function() {
        Cookie.destroy('Zebra_Cookie_Example1');
        console.log(Cookie.read('Zebra_Cookie_Example1'));

        Cookie.destroy('Zebra_Cookie_Example2');
        console.log(Cookie.read('Zebra_Cookie_Example3'));
    });

});
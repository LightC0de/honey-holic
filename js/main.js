main.setAttribute('class', 'navbar main navbar-light color-cc-62');
var colors = ['color-cc-62', 'color-ec-cd', 'color-60-30', 'color-78-37', 'color-f0-f4', 'color-5d-01'];
var i = 1;
var timerId = setInterval(function() {
    if (i == 6) { i = 0; }
    main.setAttribute('class', 'navbar main navbar-light ' + colors[i]);
    i++;
}, 2000);
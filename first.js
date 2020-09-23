/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */
/* eslint-env browser */
function viewCurrDate() { //  eslint-disable-line no-unused-vars
    "use strict";
    document.getElementById('demo').innerHTML = Date();
    alert("Hello");
    var name = prompt("Input Name");
    alert("your name is " + name);
    var ret = confirm("retry?");
    alert(ret);
}

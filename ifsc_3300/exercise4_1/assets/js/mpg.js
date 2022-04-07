"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => 
     `${lbl} must be a valid number.`;

const errorMsg = lbl => 
     `${lbl} must be a number greater than zero.`;

const focusAndSelect = selector => {

    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {

    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles)) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (miles <= 0) {
        alert(errorMsg("Miles driven"));
    } 
    if (isNaN(gallons)) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else if (gallons <= 0) {
        alert(errorMsg("Gallons of gas used"));
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};


let inputs = document.querySelectorAll ('input');

const clearEntries = () => {
   
   inputs.forEach(input => input.value = '');
   focusAndSelect("#miles");
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener(
        "click", processEntries);
    $("#miles").focus();
}); 

document.addEventListener("DOMContentLoaded", () => {
    $("#clear").addEventListener(
        "click", clearEntries);
    $("#miles").focus();
}); 

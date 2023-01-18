'use strict';

const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    document.getElementById('display').value = null;
})

function del() {
    let out = document.getElementById('display').value;
    document.getElementById("display").value = out.substring(0, out.length - 1);
}

function equal() {
    let out = document.getElementById("display").value;
    if (out) {
        document.getElementById("display").value = eval(out);
    }
}
function operator(value) {
    document.getElementById("display").value += value;
}

function keys(value) {
    document.getElementById("display").value += value;
}
function dot(value) {
    document.getElementById("display").value += ".";
}
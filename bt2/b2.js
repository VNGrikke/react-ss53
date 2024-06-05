"use strict";
function delayedCallback(callback, delay) {
    setTimeout(callback, delay);
}
delayedCallback(() => { console.log('Callback function được gọi sau 1s.'); }, 1000);

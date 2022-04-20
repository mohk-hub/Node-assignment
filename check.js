var cryptoJS = require("crypto-js");

// Encrypt
var cybertext = cryptoJS.AES.encrypt('my message', 'secret key 123').toString();

console.log(cybertext);
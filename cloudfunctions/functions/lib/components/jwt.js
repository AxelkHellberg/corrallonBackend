"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
var fs = require('fs');
let path = require("path");
let keys = require("../config/keys");
//var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
//console.log(token)
// PAYLOAD
function createAccessToken(user) {
    let payload = { "u": 1, "p": 1 };
    let token = jwt.sign(payload, keys.privateKey, keys.verifyOptions);
    return token;
    //console.log("Token - " + token)
}
function createNewAccessToken(descriptedToken) {
    let payload = { "u": descriptedToken.u, "p": descriptedToken.p };
    let token = jwt.sign(payload, keys.privateKey, keys.verifyOptions);
    return token;
    //console.log("Token - " + token)
}
function readAccessToken(token) {
    let legit = jwt.verify(token, keys.publicKey, keys.verifyOptions);
    return legit;
}
module.exports = { createAccessToken, readAccessToken, createNewAccessToken };
//# sourceMappingURL=jwt.js.map
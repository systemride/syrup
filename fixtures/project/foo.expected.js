!function r(e,n,t){function o(f,i){if(!n[f]){if(!e[f]){var a="function"==typeof require&&require;if(!i&&a)return a(f,!0);if(u)return u(f,!0);throw new Error("Cannot find module '"+f+"'")}var c=n[f]={exports:{}};e[f][0].call(c.exports,function(r){var n=e[f][1][r];return o(n?n:r)},c,c.exports,r,e,n,t)}return n[f].exports}for(var u="function"==typeof require&&require,f=0;f<t.length;f++)o(t[f]);return o}({1:[function(r,e){e.exports={bar:!0}},{}],2:[function(r,e){var n=r("./bar");e.exports={foo:n.bar}},{"./bar":1}]},{},[2]);
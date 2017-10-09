(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, entryText) {
  this.title = title;
  this.entryText = entryText;
}

Entry.prototype.wordCount = function() {
  var words = this.entryText.split(" ");
  return words.length;
};

Entry.prototype.vowels = function() {
  var letters = this.entryText.split("");
  var vowelCount = 0;
  letters.forEach(function(letter){
    if (/[aeiou]/i.test(letter)) {
      vowelCount ++;
    }
  });
  return vowelCount;
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var entry = $("#entry").val();
    var newEntry = new Entry(title, entry);
    $("ul.entries").append("<li>" + newEntry.title + " " + newEntry.wordCount()  + " " + newEntry.vowels() + "</li>");
  });
});

},{"./../js/entry.js":1}]},{},[2]);

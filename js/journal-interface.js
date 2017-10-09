var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var entry = $("#entry").val();
    var newEntry = new Entry(title, entry);
    $("ul.entries").append("<li>" + newEntry.title + "</li>");
  });
});

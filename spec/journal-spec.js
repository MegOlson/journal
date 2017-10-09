var Entry = require('./../js/entry.js').entryModule;

describe('Entry', function() {
  it("should count the number of words in entry", function(){
    var entry = new Entry("First Entry", "This is the entry.")
    expect(entry.wordCount()).toEqual(4)
  });
  it("should count the number of vowels in the entry", function(){
    var entry = new Entry("Another entry", "Entry again.")
    expect(entry.vowels()).toEqual(4)
  });
});

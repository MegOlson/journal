var Entry = require('./../js/entry.js').entryModule;

describe('Entry', function() {
  var entry;

  beforeEach(function(){
    entry = new Entry("First Entry", "This is the entry.")
  });

  it("should count the number of words in entry", function(){
    expect(entry.wordCount()).toEqual(4)
  });
  it("should count the number of vowels in the entry", function(){
    expect(entry.vowels()).toEqual(4)
  });
});

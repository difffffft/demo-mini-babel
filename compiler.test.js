const { tokenizer } = require('./compiler');

test('adds 1 + 2 to equal 3', () => {
    expect(tokenizer("2")).toEqual([{ "type": "number", "value": "2" }]);
});
const keymirror = require('./keymirror');

test('keymirror - support array, plain object, single string', () => {
    expect(keymirror([1, 2, "a"])).toEqual({1: "1", 2: "2", a: "a"});
    expect(keymirror({1: 1, 2: null, a: "bcd"})).toEqual({1: "1", 2: "2", a: "a"});
    expect(keymirror("a")).toEqual({a: "a"});
});

test('keymirror - to throw error when passed in invalid param', () => {
    expect(() => keymirror(1)).toThrow();
    expect(() => keymirror(Date.now())).toThrow();
});
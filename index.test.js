const objectUtils = require('./index');

test('keymirror is working', () => {
    expect(objectUtils.keymirror([1, 2, "a"])).toEqual({1: "1", 2: "2", a: "a"});
});

test('clone create a new identical object', () => {
    var obj = {a: 1, b: 2};
    expect(obj).toBe(obj);

    expect(objectUtils.clone(obj)).toEqual({a: 1, b: 2});
    expect(objectUtils.clone(obj)).not.toBe(obj);
});


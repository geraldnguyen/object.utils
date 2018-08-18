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


test("ownProperties(obj) returns an array of {name, value} each describes an own property of the object" , () => {
    var obj = {a: 1, b: 2, c: "blah"};
    expect(objectUtils.ownProperties(obj)).toEqual(
        [{name: "a", value: 1}, {name: "b", value: 2}, {name: "c", value: "blah"}]);

    objectUtils.ownProperties(obj).forEach(({name, value}) => {console.log(`Name: ${name}, value: ${value}`)});
});


# Utils-object
A collection of utilities dealing with object

# Keymirror
Like the original FB's keymirror but add support for array and single string

```javascript
objectUtils.keymirror([1, 2, "a"]);     //{1: "1", 2: "2", a: "a"}
objectUtils.keymirror({1: 1, 2: null, a: "bcd"});   //{1: "1", 2: "2", a: "a"}
objectUtils.keymirror("a"));    //{a: "a"}
```

# Clone
```javascript
var obj = {a: 1, b: 2};
objectUtils.clone(obj);     //{a: 1, b: 2}
```
# OwnProperties
```javascript
var obj = {a: 1, b: 2, c: "blah"};
objectUtils.ownProperties(obj); //  [{name: "a", value: 1}, {name: "b", value: 2}, {name: "c", value: "blah"}]

objectUtils.ownProperties(obj).forEach(
    ({name, value}) => {console.log(`Name: ${name}, value: ${value}`)}  //object destructuring is helpful here
);
```
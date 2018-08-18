# object.utils
A collection of utilities dealing with object

# Keymirror
Like the original FB's keymirror but add support for array and single string

```javascript
keymirror([1, 2, "a"]);     //{1: "1", 2: "2", a: "a"}
keymirror({1: 1, 2: null, a: "bcd"});   //{1: "1", 2: "2", a: "a"}
keymirror("a"));    //{a: "a"}
```

# Clone
```javascript
var obj = {a: 1, b: 2};
objectUtils.clone(obj);     //{a: 1, b: 2}
```

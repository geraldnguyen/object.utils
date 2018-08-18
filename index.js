const keymirror = require('./keymirror');

const clone = function (obj) {
    return {
        ... obj
    }
}

const ownProperties = function (obj){
    return Object.getOwnPropertyNames(obj).map(pName => new Object({name: pName, value: obj[pName]}));
}


module.exports = {keymirror, clone, ownProperties}
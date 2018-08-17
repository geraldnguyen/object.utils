const keymirror = require('./keymirror');

const clone = function (obj) {
    return {
        ... obj
    }
}


module.exports = {keymirror, clone}
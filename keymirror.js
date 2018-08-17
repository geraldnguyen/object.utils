const keymirror = function (keys) {
    if (!Array.isArray(keys)){
        if (keys instanceof Object){
            keys = Object.getOwnPropertyNames(keys);
        }
        else if (typeof keys === "string" ){
            keys = [keys];
        }
        else {
            throw new Error("keymirror(...) supports either array, plain object or a string.\
             None were provided");
        }
    }

    var ret = {};
    keys.forEach(key => {
        ret[key] = "" + key;    
    }); 

    return ret;
};

module.exports = keymirror;
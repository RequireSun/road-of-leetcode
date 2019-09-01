/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const array = {
        [s]: true
    };
    let pickKey = s;
    let temp;
    
    while (pickKey) {
        for (let i = 0, l = wordDict.length; i < l; ++i) {
            if (startWith(pickKey, wordDict[i])) {
                temp = pickKey.slice(wordDict[i].length);
                
                if (!temp) {
                    return true;
                }
                
                array[temp] = true;
            }
        }
        
        delete array[pickKey];
        temp = Object.keys(array);
        
        if (temp.length) {
            pickKey = temp[0];
        } else {
            return false;
        }
    }
    
    return false;
};

function startWith(parent, part) {
    for (let i = 0, l = part.length; i < l; ++i) {
        if (parent[i] !== part[i]) {
            return false;
        }
    }
    
    return true;
}
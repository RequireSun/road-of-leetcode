'use strict';
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    let temp;

    for (let i = magazine.length - 1; 0 <= i; --i) {
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
    }

    for (let i = ransomNote.length - 1; 0 <= i; --i) {
        temp = map.get(ransomNote[i]);
        if (!temp) {
            return false;
        }
        map.set(ransomNote[i], temp - 1);
    }

    return true;
};

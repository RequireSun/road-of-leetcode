/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var parts = path.split('/');
    var result = [];
    for (var part of parts) {
        if (part === '' || part === '.') {
            continue;
        }
        if (part === '..') {
            result.pop();
            continue;
        }
        result.push(part);
    }
    return '/' + result.join('/');
};

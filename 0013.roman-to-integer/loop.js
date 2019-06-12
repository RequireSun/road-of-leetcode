/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;

    for (let i = 0, l = s.length; i < l; ++i) {
        switch (s[i]) {
            case 'M': {
                let j = i;

                while ('M' === s[j]) {
                    total += 1000;
                    ++j;
                }

                i = j - 1;

                break;
            }
            case 'D': {
                let j = i;

                while ('D' === s[j]) {
                    total += 500;
                    ++j;
                }

                i = j - 1;

                break;
            }
            case 'C': {
                let j = i;
                let _t = 0;

                while ('C' === s[j]) {
                    _t += 100;
                    ++j;
                }

                switch (s[j]) {
                    case 'M': {
                        total += 1000 - _t;
                        i = j;
                        break;
                    }
                    case 'D': {
                        total += 500 - _t;
                        i = j;
                        break;
                    }
                    default: {
                        total += _t;
                        i = j - 1;
                        break;
                    }
                }

                break;
            }
            case 'L': {
                let j = i;

                while ('L' === s[j]) {
                    total += 50;
                    ++j;
                }

                i = j - 1;

                break;
            }
            case 'X': {
                let j = i;
                let _t = 0;

                while ('X' === s[j]) {
                    _t += 10;
                    ++j;
                }

                switch (s[j]) {
                    case 'C': {
                        total += 100 - _t;
                        i = j;
                        break;
                    }
                    case 'L': {
                        total += 50 - _t;
                        i = j;
                        break;
                    }
                    default: {
                        total += _t;
                        i = j - 1;
                        break;
                    }
                }

                break;
            }
            case 'V': {
                let j = i;

                while ('V' === s[j]) {
                    total += 5;
                    ++j;
                }

                i = j - 1;

                break;
            }
            case 'I': {
                let j = i;
                let _t = 0;

                while ('I' === s[j]) {
                    _t += 1;
                    ++j;
                }

                switch (s[j]) {
                    case 'X': {
                        total += 10 - _t;
                        i = j;
                        break;
                    }
                    case 'V': {
                        total += 5 - _t;
                        i = j;
                        break;
                    }
                    default: {
                        total += _t;
                        i = j - 1;
                        break;
                    }
                }

                break;
            }
        }
    }

    return total;
};

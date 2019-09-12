/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    let cur = [needs];
    const strLen = needs.length;
    const least = new Map([[needs.join(','), 0]]);

    while (cur.length) {
        let next = [];

        for (let i = 0, iCur = cur[i]; iCur = cur[i]; ++i) {
            for (let j = 0, iSpecial = special[j]; iSpecial = special[j]; ++j) {
                const status = [];

                for (let m = 0; m < strLen; ++m) {
                    const snum = iCur[m] - iSpecial[m];

                    if (snum < 0) {
                        break;
                    }

                    status.push(snum);
                }

                if (status.length < strLen) {
                    continue;
                }

                const _status = status.join(',');
                const _least = least.get(_status);
                const money = iSpecial[strLen] + least.get(iCur.join(','));
                if (!_least || _least > money) {
                    least.set(_status, money);
                    next.push(status);
                }
            }
        }

        cur = next;
    }

    const strZero = '0' + ',0'.repeat(strLen - 1);
    let leastest = least.get(strZero);
    if (undefined === leastest) {
        leastest = Number.MAX_SAFE_INTEGER;
    }
    least.delete(strZero);

    for (let [status, money] of least) {
        const remains = status.split(',');

        for (let i = 0; i < strLen; ++i) {
            money += remains[i] * price[i];
        }

        if (leastest > money) {
            leastest = money;
        }
    }

    return leastest;
};

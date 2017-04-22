'use strict';

module.exports = findSubsetBorders;

function findSubsetBorders ( str, set, from = 0, to = (set.length - 1) ) {
    const strl = str.length;
    let left    = leftBorder(set, from, to, str, strl),
        leftCmp = compare(set[left], str, strl);

    if ( leftCmp === 1 ) return { start: left, length: 0 };

    if ( left === to ) return leftCmp === 0
            ? { start: left,   length: 1 }
            : { start: left+1, length: 0 } // leftCmp === -1

    return { start: left, length: rightBorder(set, left, to, str, strl) - left + 1 }
}

function leftBorder ( set, min, max, str, strl) {
    let i,
        _max = ++max;

    min--;

    while ( (i = bisect(min, max)) !== undefined ) {
        compare(set[i], str, strl, false) === -1
            ? min = i
            : max = i;
    }

    return max === _max ? min : max; // min if max is never reached
}

function rightBorder ( set, min, max, str, strl) {
    let i;

    max++;

    while ( (i = bisect(min, max)) !== undefined ) {
        compare(set[i], str, strl) === 1
            ? max = i
            : min = i;
    }

    return min;
}

function bisect ( min, max ) {
    let diff = max - min;

    return diff < 2 ? undefined : min + ( diff>>1 )
}

function compare ( a, b, bLength, cutA = true ) {
    if ( cutA ) a = a.substring(0, bLength);

    return a < b
        ? -1
        : a > b
            ? 1
            : 0;
}

'use strict';

module.exports = findSubsetBorders;

/**
 * at sorted array of unique strings
 * finds subset of elements
 * which starts from the given substring
 * or where the given substring can be inserted to
 *
 * @param {String}   str - the substring
 * @param {String[]} set - the sorted array of unique strings
 * @returns {Object} res - result
 * @returns {Number} res.length - length of the found subset
 * @returns {Number} res.start - index where the subset starts,
 *                                  or where the substring can be inserted to
 *                                  if the res.length === 0
 * TODO check the 'from' and 'to' params work properly
 */
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

/**
 * to find left border of the subset
 *
 * @param {String[]} set  - the sorted array of unique strings
 * @param {Number}   min  - from where to search
 * @param {Number}   max  - until where to search
 * @param {String}   str  - the substring
 * @param {Number}   strl - length of the substring
 * @returns {Number} index of the left border
 */
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

/**
 * to find right border of the subset
 *
 * @param {String[]} set  - the sorted array of unique strings
 * @param {Number}   min  - from where to search
 * @param {Number}   max  - until where to search
 * @param {String}   str  - the substring
 * @param {Number}   strl - length of the substring
 * @returns {Number} index of the right border
 */
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

/**
 * compare two strings
 *
 * @param {String} a
 * @param {String} b
 * @param {Number} bLength - length of the b
 * @param {Boolean} cutA   - to truncate the a to length of b or not
 * @returns {Number} res   -    0  if a === b
 *                              -1 if a < b
 *                               1 if a > b
 */
function compare ( a, b, bLength, cutA = true ) {
    if ( cutA ) a = a.substring(0, bLength);

    return a < b
        ? -1
        : a > b
            ? 1
            : 0;
}

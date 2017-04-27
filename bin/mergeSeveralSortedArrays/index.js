'use strict';

const mergeTwo = require('../mergeTwoSortedArrays');

module.exports = merge;

/**
 * merges sorted arrays
 *
 * @param {...Array} sorted arrays
 * @returns {Array} merged sorted array
 */
function merge (...arrays) {
    while ( arrays.length > 1 ) arrays = mergeEachTwo(arrays);
    return arrays[0];
}

function mergeEachTwo (arrays) {
    const
        r = [],
        length = arrays.length - 1;

    for ( let i = 0; i < length; i += 2 ) {
        r.push(mergeTwo(arrays[i], arrays[i+1]));
    }

    if ( (1 + length) % 2 ) r.push(arrays[length]);

    return r;
}

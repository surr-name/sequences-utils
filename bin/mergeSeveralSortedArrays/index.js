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
    let r = arrays[0];

    for (let i = 1, l = arrays.length; i < l; i++) r = mergeTwo(r, arrays[i]);

    return r;
}

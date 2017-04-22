'use strict';

module.exports = intersect;

/**
 * intersects two sorted arrays
 *
 * @param {Array} a
 * @param {Array} b
 * @returns {Array} common elements of the arrays
 */
function intersect (a, b) {
    const
        r = [],
        aLength  = a.length,
        bLength  = b.length;
    let
        aPointer = 0,
        bPointer = 0;

    while ( aPointer < aLength && bPointer < bLength ) {

        if ( a[aPointer] === b[bPointer] ) {
            r.push(a[aPointer]);
            aPointer++;
            bPointer++;
        } else {
            a[aPointer] < b[bPointer] ? aPointer++ : bPointer++;
        }
        
    }

    return r;
}

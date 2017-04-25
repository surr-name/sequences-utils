'use strict';

module.exports = merge;

/**
 * merges two sorted arrays
 *
 * @param {Array} a sorted array
 * @param {Array} b sorted array
 * @returns {Array} sorted array of merged unique elements
 */
function merge (a, b) {
    const
        r = [],
        al = a.length,
        bl = b.length;
    let
        ap = 0,
        bp = 0;

    if ( al === 0 || bl === 0 ) return a.concat(b);

    while ( ap < al && bp < bl ) {
        if      ( a[ap]  <  b[bp] ) r.push(a[ap++]);
        else if ( a[ap] === b[bp] ) r.push(a[ap++]) && bp++;
        else                        r.push(b[bp++]);
    }

    if      ( ap < al ) return r.concat(a.slice(ap));
    else if ( bp < bl ) return r.concat(b.slice(bp));
    else                return r;
}

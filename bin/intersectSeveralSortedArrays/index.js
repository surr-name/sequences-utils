'use strict';

module.exports = intersect;

function intersect (...arrays) {
    const 
        r = [],
        arraysLength = arrays.length,
        arraysQuantity = arraysLength - 1,
        aL = [], // arrays lengthes
        aP = []; // arrays pointers

    for ( let i = 0; i < arraysLength; i++ ) {
        let length = arrays[i].length;
        if ( length === 0 ) return r;
        aL.push(length);
        aP.push(0);
    }

    let matched = 1, // quantity of arrays where current pointer equals current max
        max = arrays[0][0],
        cMaxA = arrays[0], // current array with max element through all pointers
        ai = 0; // index of arrays

    while ( ++ai < arraysLength ) {
        let ca = arrays[ai], // current array
            ce = ca[aP[ai]]; // current element of the current array
        // TODO check if we out of current array's length

        if ( ca === cMaxA ) continue;

        if ( ce > max ) {
            max = ce;
            cMaxA = ca;
            ai = -1;
            matched = 1;
            continue;
        }

        if ( ce < max ) {
            let i = aP[ai],
                l = aL[ai];

            while ( ++i < l ) {
                if ( ca[i] === max ) {
                    matched++;
                    break;
                }

                if ( ca[i] > max ) {
                    max = ca[i];
                    matched = 1;
                    cMaxA = ca;
                    aP[ai] = i;
                    ai = -1;
                    break;
                }
            }

            if ( matched === arraysQuantity ) {
            
                r.push(max);

                // increase all pointers
                for ( let k = 0; k < arraysLength; k++ ) {
                    if ( (aP[k] += 1) === aL[k] ) return r;
                }

                matched = 1;
                max = arrays[0][aP[0]];
                cMaxA = arrays[0];
                ai = -1;
                continue;
            }

            if ( i === l ) return r;
        }

        if ( ce === max && ++matched === arraysQuantity ) {
            
                r.push(max);

                // increase all pointers
                for ( let k = 0; k < arraysLength; k++ ) {
                    if ( (aP[k] += 1) === aL[k] ) return r;
                }

                matched = 1;
                max = arrays[0][aP[0]];
                cMaxA = arrays[0];
                ai = -1;
        }
    }
    return r;
}

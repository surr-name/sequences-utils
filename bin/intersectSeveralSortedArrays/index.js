'use strict';

module.exports = intersect;

function intersect (...arrays) {
    const 
        result  = [],
        lengthes = [],
        pointers = [],
        arraysLength = arrays.length,
        firstArray = arrays[0];

    for ( let i = 0; i < arraysLength; i++ ) {
        let length = arrays[i].length;
        if ( length === 0 ) return result;
        lengthes.push(length);
        pointers.push(0);
    }

    let max = arrays[0][0],
        matched = 1,
        arrayOfMax = arrays[0],
        aIndex = 0;

    while ( ++aIndex < arraysLength ) {
        let currentElement,
            currentArray = arrays[aIndex];

        if ( currentArray === arrayOfMax ) continue;

        while ( pointers[aIndex] < lengthes[aIndex] &&
                ((currentElement = currentArray[pointers[aIndex]]) < max)
        ) pointers[aIndex]++;

        if ( pointers[aIndex] === lengthes[aIndex] ) break;

        if ( currentElement > max ) {
            max = currentElement;
            arrayOfMax = currentArray;
            aIndex = -1;
            matched = 1;
        } else if ( ++matched === arraysLength ) {
            result.push(max);

            for ( let k = 0; k < arraysLength; k++ ) {
                if ( (pointers[k] += 1) === lengthes[k] ) return result;
            }

            max = firstArray[pointers[0]];
            arrayOfMax = firstArray;
            aIndex = -1;
            matched = 1;
        }
    }
    return result;
}

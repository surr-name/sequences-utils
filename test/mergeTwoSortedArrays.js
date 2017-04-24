const
    _ = require('assert'),
    m = require('../bin/mergeTwoSortedArrays');

describe('mergeTwoSortedArrays should return', ()=>{
    const
        a  = [0,    2,    4],
        b  = [   1, 2, 3   ],
        c  = [0, 1, 2, 3, 4],
        e1 = [],
        e2 = [],
        e3 = [];

    it('new empty array if both arrays are empty', () =>{
        const r = m(e1, e2);
        _.deepStrictEqual( r, e3);
        if ( r === e1 || r === e2 ) throw(new Error('reult is not new array'));
    });

    it('copy of the first array if second is empty', () =>{
        const r = m(b, e1);
        _.deepStrictEqual( r, b);
        if ( r === e1 || r === b ) throw(new Error('reult is not new array'));
    });

    it('copy of the second array if first is empty', () =>{
        const r = m(e1, b);
        _.deepStrictEqual( r, b);
        if ( r === e1 || r === b ) throw(new Error('reult is not new array'));
    });

    it('new array what is merge of the arrays', () =>{
        const r = m( a, b );
        _.deepStrictEqual( r, c);
        if ( r === a || r === b ) throw(new Error('reult is not new array'));
    });
});

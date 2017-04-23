const
    _ = require('assert'),
    m = require('../bin/intersectSeveralSortedArrays');

describe('intersectSeveralSortedArrays should return', ()=>{
    describe('empty array if', () =>{

        it('all arrays are empty', () =>{
            _.deepStrictEqual(
                m([], [], []),
                []
            );
        });

        it('one of arrays is empty', () =>{
            _.deepStrictEqual(
                m([0,1], [0, 2], []),
                []
            );
        });

        it('arrays has no common elements', () =>{
            _.deepStrictEqual(
                m([0,2], [1,3], [4,5]),
                []
            );
        });
    });

    describe('array of common elements if they exists', () =>{

        it('in a middle', () =>{
            _.deepStrictEqual(
                m(
                    [0,    2,    4, 5],
                    [   1, 2, 3, 4,      7],
                    [      2,    4,   6]
                ),
                [2, 4]
            );
        });

        it('at the start of one of the arrays', () =>{
            _.deepStrictEqual(
                m(
                    [0,    2,    4, 5],
                    [0, 1, 2, 3],
                    [0,    2,    4,   6]
                ),
                [0, 2]
            );
        });

        it('at the end of one of the arrays', () =>{
            _.deepStrictEqual(
                m(
                    [      2,    4, 5],
                    [0, 1,    3,    5],
                    [0,    2,    4, 5]
                ),
                [5]
            );
        });

        it('arrays are equal', () =>{
            _.deepStrictEqual(
                m(
                    [0, 1, 2, 3, 4],
                    [0, 1, 2, 3, 4],
                    [0, 1, 2, 3, 4]
                ),
                [0, 1, 2, 3, 4]
            );
        });

        it('and are strings', () =>{
            _.deepStrictEqual(
                m(
                    ['apple', 'lime', 'orange',  'peach'],
                    [         'lime', 'mango',   'peach'],
                    [         'lime', 'olives',  'peach']
                ),
                ['lime', 'peach']
            );
        });
    });
});

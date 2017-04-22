const
    _ = require('assert'),
    m = require('../bin/intersectTwoSortedArrays');

describe('intersectTwoSortedArrays should return', ()=>{
    describe('empty array if', () =>{

        it('both arrays are empty', () =>{
            _.deepStrictEqual(
                m([], []),
                []
            );
        });

        it('one of arrays is empty', () =>{
            _.deepStrictEqual(
                m([0,1], []),
                []
            );
        });

        it('arrays has no common elements', () =>{
            _.deepStrictEqual(
                m([0,2], [1,3]),
                []
            );
        });
    });

    describe('array of common elements if they exists', () =>{

        it('in a middle', () =>{
            _.deepStrictEqual(
                m(
                    [0,    2,    4],
                    [   1, 2, 3]
                ),
                [2]
            );
        });

        it('at the start of one of the arrays', () =>{
            _.deepStrictEqual(
                m(
                    [0,    2,    4],
                    [0, 1, 2, 3]
                ),
                [0, 2]
            );
        });

        it('at the end of one of the arrays', () =>{
            _.deepStrictEqual(
                m(
                    [0,    2,    4],
                    [   1, 2, 3, 4]
                ),
                [2, 4]
            );
        });

        it('arrays are equal', () =>{
            _.deepStrictEqual(
                m(
                    [0, 1, 2, 3, 4],
                    [0, 1, 2, 3, 4]
                ),
                [0, 1, 2, 3, 4]
            );
        });


        it('; the returned elements must be unique', () =>{
            _.deepStrictEqual(
                m(
                    [0, 1, 2, 2,    5],
                    [0,    2, 2, 4]
                ),
                [0, 2]
            );
        });
    });
});

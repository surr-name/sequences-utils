const
    _ = require('assert'),
    m = require('../bin/mergeSeveralSortedArrays');

describe('mergeSeveralSortedArrays should return', ()=>{

    it('new array what is merge of the arrays', () =>{ _.deepStrictEqual(
        m(
            [0,    2,    4,    6, 7],
            [      2, 3            ],
            [0,    2,       5      ]
        ),
            [0,    2, 3, 4, 5, 6, 7]
    )});
});

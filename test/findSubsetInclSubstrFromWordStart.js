const
    _ = require('assert'),
    m = require('../bin/findSubsetInclSubstrFromWordStart'),

    a = [
        'abort',    // 0
        'abroad',   // 1
        'await',    // 2
        'bo',       // 3
        'born',     // 4
        'cart',     // 5
        'cobalt',   // 6
        'copper',   // 7
        'corner',   // 8
        'cost',     // 9
        'cotton',   // 10
        'current',  // 11
        'done',     // 12
        'duplex',   // 13
        'fine',     // 14
        'further',  // 15
        'zip',      // 16
        'zipper'    // 17
    ],

    b = [
        'abort',    // 0
    ],

    c = [
        'abort',    // 0
        'abroad',   // 1
    ];

describe('findSubsetInclSubstrFromWordStart should find', ()=>{
    describe('subset if it exists', ()=>{

        it('in a middle of the array', ()=>{
            _.deepStrictEqual(
                m('co', a),
                {start: 6, length: 5}
            );
        });

        it('in the start of the array', ()=>{
            _.deepStrictEqual(
                m('ab', a),
                {start: 0, length: 2}
            );
        });

        it('in the end of the array', ()=>{
            _.deepStrictEqual(
                m('zi', a),
                {start: 16, length: 2}
            );
        });

        it('and starts from the exact string', ()=>{
            _.deepStrictEqual(
                m('bo', a),
                {start: 3, length: 2}
            );
        });

        it('in the start of the array and the subset\'s size is 1', ()=>{
            _.deepStrictEqual(
                m('abo', a),
                {start: 0, length: 1}
            );
        });

        it('in a middle of the array and the subset\'s size is 1', ()=>{
            _.deepStrictEqual(
                m('born', a),
                {start: 4, length: 1}
            );
        });

        it('in the end of the array and the subset\'s size is 1', ()=>{
            _.deepStrictEqual(
                m('zipp', a),
                {start: 17, length: 1}
            );
        });

        it('in one-element array', ()=>{
            _.deepStrictEqual(
                m('abo', b),
                {start: 0, length: 1}
            );
        });

        it('in two-elements array at start', ()=>{
            _.deepStrictEqual(
                m('abo', c),
                {start: 0, length: 1}
            );
        });

        it('in two-elements array at end', ()=>{
            _.deepStrictEqual(
                m('abr', c),
                {start: 1, length: 1}
            );
        });
    });

    describe('index where to paste the string, if the subset does not exists', ()=>{

        it('in the end of the array', ()=>{
            _.deepStrictEqual(
                m('zulu', a),
                {start: 18, length: 0}
            );
        });

        it('in a middle of the array', ()=>{
            _.deepStrictEqual(
                m('coal', a),
                {start: 6, length: 0}
            );
        });

        it('in the start of the array', ()=>{
            _.deepStrictEqual(
                m('abbat', a),
                {start: 0, length: 0}
            );
        });

        it('in one-element array (before)', ()=>{
            _.deepStrictEqual(
                m('aa', b),
                {start: 0, length: 0}
            );
        });

        it('in one-element array (after)', ()=>{
            _.deepStrictEqual(
                m('zulu', b),
                {start: 1, length: 0}
            );
        });

        it('in two-elements array at start', ()=>{
            _.deepStrictEqual(
                m('aa', c),
                {start: 0, length: 0}
            );
        });

        it('in two-elements array at end', ()=>{
            _.deepStrictEqual(
                m('zulu', c),
                {start: 2, length: 0}
            );
        });
    });
});

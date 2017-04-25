at sorted array of unique strings, searches subsequence of elements which starts from the given substring or where the given substring can be inserted to.

 * time complexity is `O(log n)`, where `n` is length of the given sorted array;
 * memory complexity is `O(1)`;

it uses [Binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm) to find each border of the subsequence.

## Usage

**findSubsequence(`substring`, `sortedArray`)**

 * **arguments**:
    * **`substring`** *string*
    * **`sortedArray`** *array* of strings

 * **returns object**
    * **`length`** *number*
    * **`start`** *number* index of the array

## Example

```js
const
    findSubsequence = require('../bin/findSubsequenceIncludingSubstringFromWordStart'),

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
    ];

    findSubsequence('co', a);  // {start: 6, length: 5}
    findSubsequence('cab', a); // {start: 5, length: 0}
```


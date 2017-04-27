merges several sorted arrays

time complexity is `O(n * m * log m)`, where `n` is average length of the arrays, `m` is quantity of the arrays.

## Usage

**merge(`a`, `b`, `c`, ...)**

 * **arguments**:
    * **`a`** *array*
    * **`b`** *array*
    * **`c`** *array*
    * ...

 * **returns**
    * sorted merged *array*

## Example

```js
const merge = require('../bin/mergeSeveralSortedArrays');

let fruits = merge(
             ['apple', 'lime',          'orange', 'peach'],
             [         'lime',                    'peach'],
             [         'lime', 'mango',                  ]
    );

// fruits is ['apple', 'lime', 'mango', 'orange', 'peach']
```

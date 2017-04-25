merges two sorted arrays

time complexity is `O(n)`, where `n` is sum of lengthes of both arrays in worst case.

## Usage

**merge(`a`, `b`)**

 * **arguments**:
    * **`a`** *array*
    * **`b`** *array*

 * **returns**
    * sorted *array* of merged unique elements

## Example

```js
const merge = require('../bin/mergeTwoSortedArrays');

let fruits = merge(
        ['apple', 'lime', 'orange', 'peach'],
        [         'lime', 'mango',  'peach']
    );

// commonFruits is [ 'apple', 'lime', 'mango', 'orange', 'peach' ]
```

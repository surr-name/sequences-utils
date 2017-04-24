intersects two sorted arrays

time complexity is `O(n)`, where `n` is sum of lengthes of both arrays in worst case.

## Usage

**intersect(`a`, `b`)**

 * **arguments**:
    * **`a`** *array*
    * **`b`** *array*

 * **returns**
    * sorted *array* of common elements

## Example

```js
const intersect = require('../bin/intersectTwoSortedArrays');

let commonFruits = intersect(
        ['apple', 'lime', 'orange', 'peach'],
        [         'lime', 'mango',  'peach']
    );

// commonFruits is ['lime', 'peach']
```

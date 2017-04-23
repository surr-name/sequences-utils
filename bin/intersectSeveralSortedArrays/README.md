intersects several sorted arrays

time complexity is `O(m * n)`, where:
 * `m` is quantity of the arrays
 * `n` in worst case is length of the longest array.

## Usage

**intersect(`a`, `b`, `c`, ...)**

 * **arguments are any quantyti of sorted arrays**:

 * **returns**
    * sorted *array* of common elements

## Example

```js
const intersect = require('../bin/intersectSeveralSortedArrays');

let commonFruits = intersect(
        ['apple', 'lime', 'orange', 'peach'],
        [         'lime', 'mango',  'peach'],
        [         'lime', 'olives', 'peach']
    );

// commonFruits is ['lime', 'peach']
```

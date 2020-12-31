# Some drop-in classes for JavaScript interviews

- JS lacks a built in heap/dset implemenation, so here's some quick one I wrote so I never get stuck without it.

- To avoid scrambling to find/fix online implemenations, I wrote my own to be sure I could have quick access to these essential classes if the need arrises.

# Heap
- Takes a optional custom comparator (like `sort()`)
    - `Min-heap: (a, b) => a-b`
    - `Max-heap: (a, b) => b-a`
- Takes an optional input array that's heapified
- Internally implemented using an array with root @ idx = 0
- No guarantees about comparator stability (per ES spec)

# Dset
- Union by size with path compression
- Array implementation (ints only) 
- Values: negative = root = -size of union, positive = points to parent

# Todos
- Write in TS and compile to JS
- Write some actual unit tests in Mocha/Chai/assert
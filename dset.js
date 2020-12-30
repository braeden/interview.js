class DisjointSets {
    constructor(size = 0) {
        this.arr = [];
        this.addElems(size);

    }
    addElems(size) {
        this.arr = this.arr.concat(new Array(size).fill(-1));
    }

    find(elem) {
        if (this.arr[elem] < 0)
            return elem;
        return this.arr[elem] = this.find(this.arr[elem]);
    }

    setUnion(a, b) {
        const rootA = this.find(a);
        const rootB = this.find(b);

        if (a === b)
            return;

        if (this.arr[rootA] <= this.arr[rootB]) {
            this.arr[rootA] += this.arr[rootB];
            this.arr[rootB] = rootA;
        } else {
            this.arr[rootB] += this.arr[rootA];
            this.arr[rootA] = rootB;
        }
    }
}

//////////////////////////////////

const dset = new DisjointSets(10)
dset.setUnion(0, 1)
dset.setUnion(0, 2)
console.log(dset.arr)
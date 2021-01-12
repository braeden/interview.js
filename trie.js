class Trie {
    constructor(arr = []) {
        this.o = {};
        arr.forEach(e => this.insert(e));
    }

    insert(word) {
        let temp = this.o;
        for (const c of word) {
            if (!temp[c])
                temp[c] = {};
            temp = temp[c];
        }
        temp.end = true;
    }

    find(word, full = true) {
        let temp = this.o;
        for (const c of word) {
            if (!temp[c])
                return false;
            temp = temp[c];
        }
        return full ? !!temp.end : true;
    }

    value() {
        return this.o;
    }
    
    remove(word) {
        if (this.find(word)) {
            let temp = this.o;
            let lowestRemoval, lowestRemovalKey;
            for (const c of word) {
                if (Object.keys(temp).length > 1 || !lowestRemoval) {
                    lowestRemoval = temp;
                    lowestRemovalKey = c;
                }
                temp = temp[c];
            }
            delete temp.end;
            if (Object.keys(temp).length === 0) {
                Trie.removeDown(lowestRemoval[lowestRemovalKey]);
                delete lowestRemoval[lowestRemovalKey];
            }
        }
    }

    static removeDown(obj) {
        Object.keys(obj).forEach(e => {
            this.removeDown(obj[e]);
            delete obj[e];
        });
    }
}

////////////////////////////////



let t = new Trie();
t.insert('good');
t.insert('goodbye');
t.insert('goodhi');
let o = t.value()['g']['o']['o'];
console.log(JSON.stringify(t.value()), o);
t.remove('goodbye');
t.remove('goodhi');
console.log(JSON.stringify(t.value()), o);
t.insert('hello');
t.insert('goodbye');
// t.insert('helloyou');
t.insert('good');
o = t.value()['g']['o']['o'];
console.log(JSON.stringify(t.value()), o);
t.remove('good');
console.log(JSON.stringify(t.value()), o);
t.remove('goodbye');
// t.remove('hello')
t.insert('help');
console.log(JSON.stringify(t.value()), o);

console.log(t.find('good'));
console.log(t.find('good', false));
console.log(t.find('hello'));
console.log(t.find('he'));
t.insert('he');
console.log(t.find('he'));
console.log(t.find('help'));
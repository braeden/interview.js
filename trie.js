class Trie {
    constructor() {
        this.o = {};
    }

    insert(word) {
        let temp = this.o;
        word.split('').forEach(e => {
            temp[e] = { ...temp[e] };
            temp = temp[e];
        });
        temp.end = true;
    }

    find(word, full = true) {
        let temp = this.o;
        let arr = word.split('');
        for (let i = 0; i < word.length; i++) {
            if (!temp[arr[i]])
                return false;
            temp = temp[arr[i]];
        }
        return full ? !!temp.end : true;
    }

    value() {
        return this.o;
    }
}

////////////////////////////////

let t = new Trie();
t.insert('hello');
t.insert('goodbye');
console.log(JSON.stringify(t.value()));
console.log(t.find('good'));
console.log(t.find('good', false));
console.log(t.find('hello'));
console.log(t.find('he'));
t.insert('he');
console.log(t.find('he'));
console.log(t.find('help'));

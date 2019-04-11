class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  
  _hash(key){
    let total = 0;
    let weirdPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i += 1) {
      let value = key[i].charCodeAt(0) - 96;
      total = (total + weirdPrime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let tuple = [key, value];
    let index = this._hash(key);
    if (this.keyMap[index] === undefined) {
      this.keyMap[index] = [tuple];
    } else {
      this.keyMap[index].push(tuple);
    }
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i += 1) {
        let tuple = this.keyMap[index][i];
        if (tuple[0] === key) return tuple[1];
      }
    }
    return undefined;
  }

  keys() {
    let keyMap = [...this.keyMap];
    let tuples = [];
    for (let i = 0; i < keyMap.length; i += 1) {
      if (keyMap[i]) {
        tuples = tuples.concat(keyMap[i]);
      }
    }
    let keys = [];
    for (let tuple of tuples) {
      keys.push(tuple[0]);
    }
    return new Set(keys);
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i += 1) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j += 1) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
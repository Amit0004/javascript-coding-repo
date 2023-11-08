class MRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.keys = [];
  }

  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.keys.splice(this.keys.indexOf(key), 1);
      this.keys.unshift(key);
      return value;
    }
    return undefined;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.keys.splice(this.keys.indexOf(key), 1);
    }
    this.cache.set(key, value);
    this.keys.unshift(key);
    if (this.cache.size > this.capacity) {
      const leastRecentlyUsedKey = this.keys.pop();
      this.cache.delete(leastRecentlyUsedKey);
    }
  }
}

module.exports = MRUCache;

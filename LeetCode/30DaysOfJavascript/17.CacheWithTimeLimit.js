// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with
// each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds.
// Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired
// key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

class ExpiringKeyValueStore {
  constructor() {
    // Store key-value pairs and their expiration times
    this.data = new Map(); // Map is a built-in data structure that allows you to store key-value pairs. 
  }

  set(key, value, duration) {
    // Check if the key already exists and is unexpired
    if (this.data.has(key) && this.isKeyUnexpired(key)) {
      // Update value and duration
      this.data.set(key, { value, expiration: Date.now() + duration });
      return true;
    } else {
      // Add new key-value pair with expiration time
      this.data.set(key, { value, expiration: Date.now() + duration });
      return false;
    }
  }

  get(key) {
    if (this.data.has(key) && this.isKeyUnexpired(key)) {
      return this.data.get(key).value;
    } else {
      return -1;
    }
  }
  count() {
    return Array.from(this.data.values()).filter((entry) =>
      this.isKeyUnexpired(entry)
    ).length;
  }
  isKeyUnexpired(key) {
    // Check if the key is unexpired based on its expiration time
    const expirationTime = this.data.get(key).expiration;
    return expirationTime > Date.now();
  }
}

// Example Usage:
const store = new ExpiringKeyValueStore();

console.log(store.set(1, 10, 5000)); // false
console.log(store.set(2, 20, 3000)); // false
console.log(store.set(1, 30, 2000)); // true (key 1 already exists, updates value and duration)

console.log(store.get(1)); // 30 (unexpired)
console.log(store.get(2)); // 20 (unexpired)

setTimeout(() => {
  console.log(store.get(1)); // -1 (expired)
  console.log(store.get(2)); // -1 (expired)
  console.log(store.count()); // 0 (no unexpired keys)
}, 6000); // Wait for both keys to expire

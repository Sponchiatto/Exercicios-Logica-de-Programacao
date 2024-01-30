const TimeLimitedCache = function () {
  this.cache = new Map(); //Map is a built-in data structure that allows you to store key-value pairs.
};

// The set() method of Map instances adds or updates an entry in this map with a specified key and a value.
TimeLimitedCache.prototype.set = function (key, value, duration) {
  // The has() method of Map instances returns a boolean indicating whether an element
  // with the specified key exists in this map or not.
  let found = this.cache.has(key);

  // The global clearTimeout() method cancels a timeout previously established by calling setTimeout().
  if (found) clearTimeout(this.cache.get(key).ref);
  this.cache.set(key, {
    value,
    ref: setTimeout(() => this.cache.delete(key), duration),
  });
  return found;
};

// The get() method of Map instances returns a specified element from this map.
TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

// The size accessor property of Map instances returns the number of elements in this map.
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

// Usage example

// Creating an instance of TimeLimitedCache
const cache = new TimeLimitedCache();

// Test 1: Adding a new key-value pair with a duration of 2000 milliseconds
console.log(cache.set(1, "we are number one", 2000)); // Should return false (key doesn't exist)

// Test 2: Getting the value of the existing key before it expires
console.log(cache.get(1)); // Should return 'Value1'

// Test 3: Adding a new key-value pair with the same key but different value and duration
console.log(cache.set(1, "we are number one updated", 1500)); // Should return true (key already exists)

// Test 4: Getting the updated value before it expires
console.log(cache.get(1)); // Should return 'we are number one updated'

// Test 5: Waiting for the first key to expire and checking its value
setTimeout(() => {
  console.log(cache.get(1)); // Should return -1 (expired)
  console.log(cache.count()); // Should return 0 (no unexpired keys)
}, 2500);

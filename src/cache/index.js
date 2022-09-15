const cache = {
  set(key, value, timeout) {
    this[key] = value;
    const instance = this;
    if (timeout) {
      setTimeout(() => {
        delete instance[key];
      }, timeout);
    }
  },
  get(key) {
    return this[key];
  },
  delete(key) {
    delete this[key];
  },
};

export default cache;

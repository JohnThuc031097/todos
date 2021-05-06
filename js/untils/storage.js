const TODOS_STORAGE_KEY = 'TODOS';

export default {
  keys: {
    TODOS_STORAGE_KEY
  },

  get(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
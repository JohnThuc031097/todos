const TODOS_KEY = 'TODOS';

export default {
  keys: {
    TODOS_KEY
  },

  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
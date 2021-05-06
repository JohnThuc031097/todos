import storage from "./untils/storage.js";

const init = {
  todos: storage.get(storage.keys.TODOS_STORAGE_KEY)
}

const actions = {
  add({ todos }, title) {
    todos.push({ title, completed: false });
    storage.set(storage.keys.TODOS_STORAGE_KEY, todos);
  }
}

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
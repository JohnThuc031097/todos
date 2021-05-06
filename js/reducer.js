import storage from "./untils/storage.js";

const init = {
  todos: storage.get(storage.keys.TODOS_KEY) || [],
  filter: 'all',
  filters: {
    all: () => true,
    active: todo => !todo.completed,
    completed: todo => todo.completed
  },
  editIndex: null
}

const actions = {
  add({ todos }, title) {
    if (title) {
      todos.push({ title, completed: false });
    }
  },
  destroy({ todos }, index) {
    todos.splice(index, 1);
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active);
  },
  toggle({ todos }, index) {
    const todo = todos[index];
    todo.completed = !todo.completed;
  },
  toggleAll({ todos }, checked) {
    todos.map(todo => todo.completed = checked);
  },
  startModeEdit(state, index) {
    state.editIndex = index;

  },
  endModeEdit(state, newTitle) {
    if (newTitle !== '') {
      state.todos[state?.editIndex].title = newTitle;
    } else {
      this.destroy(state, state?.editIndex);
    }
    state.editIndex = null;
  },
  cancelModeEdit(state) {
    state.editIndex = null;
  },
  typefilter(state, type) {
    state.filter = type;
  }
}

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  storage.set(storage.keys.TODOS_KEY, state.todos);
  return state;
}
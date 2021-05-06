const init = {
  todos: [
    {
      title: 'Learn HTML, CSS',
      completed: true
    },
    {
      title: 'Learn Javascript',
      completed: false
    }
  ]
}

const actions = {
  add({ todos }, title) {
    todos.push({ title, completed: false });
  }
}

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
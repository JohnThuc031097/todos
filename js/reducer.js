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

export default function reducer(state = init, action, args) {
  switch (action) {
    default:
      return state;
  }
}
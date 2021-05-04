const init = {

}

export default function reducer(state = init, action, args) {
  switch (action) {
    case 'ADD':
      return {
        ...state,
        cars: [...state.cars, ...args]
      }
    default:
      return state;
  }
}
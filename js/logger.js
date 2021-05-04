export default function logger(reducer) {
  console.log(reducer);
  return (preState, action, args) => {
    console.group(action);

    console.log('Prev State:', preState);
    console.log('Action Agruments:', args);
    const nextState = reducer(preState, action, args);
    console.log('Next State:', nextState);

    console.groupEnd();
    // return nextState;
  };
};
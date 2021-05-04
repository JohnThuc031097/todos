import html from "../core.js";
import { connect } from "../store.js";

const connector = connect(state => ({
    title: 'REACT',
    cars: state.cars
  })
);

function App(props) {
  console.log(props);
  return html`
    <h1>${props.title}</h1>
    <ul>
      ${props.cars.map(car => `<li>${car}</li>`)}
    </ul>
    <button onclick="dispatch('ADD', 'Rorche');">Add car</button>
  `;
}

export default connector(App);
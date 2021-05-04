import html from "../core.js";

import Header from "../component/Header.js";
import TodoList from "./TodoList.js";
import Footer from "../component/Footer.js";

function App() {
  return html/*html*/`
    <section class="todoapp">
      ${Header()}
      ${TodoList()}
      ${Footer()}
    </section>
  `;
}

export default App;
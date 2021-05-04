import html from "../core.js";
import { connect } from "../store.js";

import TodoItem from "../component/TodoItem.js";

let connector = connect();

function TodoList({ todos }) {
	return html/*html*/`
   <section class="main">
		<input id="toggle-all" class="toggle-all" type="checkbox">
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			${todos.map(todo => TodoItem(todo))}
		</ul>
	</section>
  `;
}

export default connector(TodoList);
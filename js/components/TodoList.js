import html from "../core.js";
import { connect } from "../store.js";

import TodoItem from "./TodoItem.js";

let connector = connect();

function TodoList({ todos, filter, filters, editIndex }) {
	return html/*html*/`
   <section class="main">
		<input 
			id="toggle-all" 
			class="toggle-all" 
			type="checkbox"
			onchange="dispatch('toggleAll', this.checked)"
			${todos.every(filters.completed) && 'checked'}
		>
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			${todos
			.filter(filters[filter])
			.map((todo, index) => TodoItem({ index, todo, editIndex }))}
		</ul>
	</section>
  `;
}

export default connector(TodoList);
import html from "../core.js";

function TodoItem({ title, completed }) {
	return html/*html*/`
   <li class="${completed && 'completed'}">
		<div class="view">
			<input class="toggle" type="checkbox" ${completed && 'checked'}>
			<label>${title}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="${title}">
	</li>
  `;
}

export default TodoItem;
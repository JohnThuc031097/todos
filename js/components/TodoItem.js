import html from "../core.js";

function TodoItem({ index, todo, editIndex }) {
	return html/*html*/`
   <li 
	 		class="${todo.completed && 'completed'} ${editIndex === index && 'editing'}"
		>
		<div class="view">
			<input 
				class="toggle" 
				type="checkbox"
				onchange="dispatch('toggle', ${index})"
				${todo.completed && 'checked'}
			>
			<label ondblclick="dispatch('startModeEdit', ${index})">${todo.title}</label>
			<button 
				class="destroy"
				onclick="dispatch('destroy', ${index})"
			></button>
		</div>
		<input 
			class="edit" 
			value="${todo.title}"
			onkeyup="event.keyCode === 13 && dispatch('endModeEdit', this.value.trim()) || 
			event.keyCode === 27 && dispatch('cancelModeEdit')"
		>
	</li>
  `;
}

export default TodoItem;
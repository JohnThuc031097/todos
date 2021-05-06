import html from "../core.js";
import { connect } from "../store.js";

function Footer({ todos, filter, filters }) {
	return html/*html*/`
   <footer class="footer">
		<span class="todo-count">
			<strong>${todos.filter(filters[filter]).length}</strong> item left
		</span>
		<ul class="filters">
			${Object.keys(filters).map(typeFilter => html/*html*/`
				<li onclick="dispatch('typefilter', '${typeFilter}')">
					<a class="${filter === typeFilter && 'selected'}" href="#${typeFilter}">
						${typeFilter[0].toUpperCase() + typeFilter.slice(1, typeFilter.length)}
					</a>
				</li>
			`)}
		</ul>
		${todos.filter(filters.completed).length > 0 &&
		html/*html*/`		
			<button 
				class="clear-completed"
				onclick="dispatch('clearCompleted')"
			>
				Clear completed
			</button>
		`}
	</footer>
  `;
}

export default connect()(Footer);
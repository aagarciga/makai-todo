import './App.css'
import TodoList from './features/todo/components/TodoList/TodoList'
import { TodoProvider } from './features/todo/contexts/TodoContext'

function App() {

	return (
		<TodoProvider>
			<TodoList />
		</TodoProvider>
	)
}

export default App;

import { createContext, useState, useCallback } from "react";

const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<TodoProviderProps> = ({children}) => {
	const [todos, setTodos] = useState<Todo[]>([]);

		const addTodo = useCallback((title: string): void => {
			const newTodo: Todo = {
				id: Date.now(),
				title: title.trim()
			};
			setTodos(prevTodos => [...prevTodos, newTodo]);
		}, []);

		const deleteTodo = useCallback((id: number): void => {
			setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
		}, []);

		const contextValue: TodoContextType = {
			todos,
			addTodo,
			deleteTodo
		};

		return (
			<TodoContext.Provider value={contextValue}>
				{children}
			</TodoContext.Provider>
		);
};

export { TodoContext, TodoProvider };
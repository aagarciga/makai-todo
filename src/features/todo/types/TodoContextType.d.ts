interface TodoContextType {
	todos: Todo[];
	addTodo: (title: string) => void;
	deleteTodo: (id: number) => void;
}
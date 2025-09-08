import { useCallback, useState } from 'react';
import useTodos from '../../hooks/useTodos';
import TodoItem from '../TodoItem/TodoItem';

import styles from './TodoList.module.css';

const TodoList: React.FC = () => {
	const { todos, addTodo } = useTodos();
	const [inputValue, setInputValue] = useState<string>('');

	const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const trimmedInputValue = inputValue.trim();
		if (trimmedInputValue) {
			addTodo(trimmedInputValue);
			setInputValue('');
		}
	}, [inputValue, addTodo]);

	const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
		setInputValue(e.target.value);
	}, []);

	const isButtonDisabled: boolean = !inputValue.trim();

	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>React Todo App</h1>

			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					placeholder="Create a new todo"
					aria-label="Todo title"
					className={styles.input}
				/>
				<button
					type="submit"
					disabled={isButtonDisabled}
					aria-label="Add todo"
					style={{
						color: isButtonDisabled ? 'var(--theme-color-foreground)' : 'var(--theme-color-primary)',
						cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
					}}
					className={styles.button}
				>
					Add
				</button>
			</form>

			<div role="list" aria-label="Todo items" className={styles.list}>
				{todos.length === 0 ? (
					<p className={styles['no-todos']}>
						No task found
					</p>
				) : (
					todos.map((todo: Todo) => (
							<TodoItem key={todo.id} todo={todo} />
					))
				)}
			</div>
		</div>
	);
};

export default TodoList;
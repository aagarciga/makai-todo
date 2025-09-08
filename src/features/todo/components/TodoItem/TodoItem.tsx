import { useCallback } from "react";
import useTodos from "../../hooks/useTodos";

import styles from './TodoItem.module.css';
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const { deleteTodo } = useTodos();

	const handleDelete = useCallback((): void => {
		deleteTodo(todo.id);
	}, [deleteTodo, todo.id]);

	return (
		<div className={styles.container} role="listitem">
			<span className={styles.title}>
				{todo.title}
			</span>
			
			<button
			className={styles.button}
				onClick={handleDelete}
				aria-label={`Delete todo: ${todo.title}`}
			>
				Delete
			</button>
		</div>
	);
};

export default TodoItem;
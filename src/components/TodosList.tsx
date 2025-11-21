import React from "react";
import { useTodos } from "../context/TodosContext";
import { useFilter } from "../context/FilterContext";

export function TodosList() {
  const { todos } = useTodos();
  const { filter } = useFilter();

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // 'all'
  });

  if (visibleTodos.length === 0) {
    return <p>No todos for this filter.</p>;
  }

  return (
    <ul>
      {visibleTodos.map((todo) => (
        <li key={todo.id}>
          {todo.text} {todo.completed ? "✅" : "⬜"}
        </li>
      ))}
    </ul>
  );
}

export default TodosList;
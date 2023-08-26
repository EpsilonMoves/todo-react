import { useState, useEffect, useMemo, useCallback } from 'react';

import { Todo } from '../models/Todo';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/';

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(API_URL);

      const data = await response.json();
      setTodos(data as Todo[]);
    }

    fetchTodos();
  }, []);

  const addTodo = useCallback((todo: Todo) => {
    setTodos((prevTodos: Todo[]) => [todo, ...prevTodos]);
  }, []);

  const removeTodo = useCallback((id: string) => {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const updateTodo = useCallback((updatedTodo: Todo) => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo: Todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      ),
    );
  }, []);

  const searchTodo = useCallback(
    (searchString: string) => setSearchTerm(searchString),
    [],
  );

  const filteredTodos = useMemo(() => {
    if (!searchTerm.trim()) return todos;
    return todos.filter((todo: Todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [todos, searchTerm]);

  return {
    todos: filteredTodos,
    addTodo,
    removeTodo,
    updateTodo,
    searchTodo,
  };
};

export default useTodos;

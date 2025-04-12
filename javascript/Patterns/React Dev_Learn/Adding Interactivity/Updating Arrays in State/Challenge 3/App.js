// https://react.dev/learn/updating-arrays-in-state
// 3. Fix the mutations using non-mutative methods

import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
  	setTodos(
  		[...todos, 
			{
				id: nextId++,
				title: title,
				done: false
			}
    	]
  	);
  	console.log('Adding: '+title);
  }

	// Pattern: Slice and use array item reference
  function handleChangeTodo(nextTodo) {
  	let _next = todos.slice();
    const todo = _next.find(t =>
      t.id === nextTodo.id
    );
    todo.title = nextTodo.title;
    todo.done = nextTodo.done;
    setTodos(_next);
  }

  function handleDeleteTodo(todoId) {
    setTodos(
    	todos.filter(todo => {
    		if (todo.id === todoId) { return false; }
    		return true;
    	})
    );
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

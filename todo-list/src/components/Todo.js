import React from 'react';

const Todo = ( {text, todo, todos, setTodos} ) => {
  const deleteHandler = (el) => {
    setTodos(todos.filter(el => {
      return el.id !== todo.id
    }));
  };
  @TODO last at 52:00

  return(
    <div className='todo'>
      <li className='todo-item'>
        {text}
      </li>
      <button className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn' onClick={deleteHandler}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;

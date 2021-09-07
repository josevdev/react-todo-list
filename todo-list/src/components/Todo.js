import React from 'react';
import './Todo.css';

const Todo = ( {text, todo, todos, setTodos} ) => {
  const deleteHandler = (el) => {
    setTodos(todos.filter(el => {
      return el.id !== todo.id
    }));
  };

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        }
      }
      return item;
    }));
  }

  return(
    <div className='todo input-group mb-3'>
      <li className={ `todo-item form-control ${todo.completed ? 'completed' : ''}` }>
        {text}
      </li>
      <button
        className='complete-btn btn btn-success'
        onClick={completeHandler}
      >
        <i className='fas fa-check'></i>
      </button>
      <button
        className='trash-btn btn btn-danger'
        onClick={deleteHandler}
      >
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;

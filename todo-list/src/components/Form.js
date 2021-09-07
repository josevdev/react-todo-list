import React from 'react';
import { v4 as uuid } from 'uuid';
import './Form.css';

const Form = ( {inputText, setInputText, todos, setTodos, setStatus} ) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: uuid()}
    ]);
    setInputText('');
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return(
    <form>
      <div className='input-group input-group-lg'>
        <input
          className="todo-input form-control"
          value={inputText}
          type="text"
          onChange={inputTextHandler}
        />
        <button
          className="todo-button btn btn-success"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select
          className="filter-todo form-select mb-3"
          name="todos"
          onChange={statusHandler}
        >
          <option value="all">All Todos</option>
          <option value="completed">Completed Todos</option>
          <option value="uncompleted">Uncompleted Todos</option>
        </select>
      </div>
    </form>
  );
}

export default Form;

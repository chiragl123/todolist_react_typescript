import React, { useState } from 'react';
import './App.css';
import InputFields from './components/Input/InputFields';
import { Todo } from './shared/models';
import TodoList from './components/List/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();

    if(todo){
      setTodos([...todos, {
        id: Date.now(),
        todo,
        isDone: false
      }]);
      setTodo("");
    }
  }
  console.log(todos);
  return (
    <div className='App'>
      <span className="heading">Tasker</span>
      <InputFields 
        todo={todo} 
        setTodo={setTodo} 
        handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />  
    </div>
  );
}

export default App;

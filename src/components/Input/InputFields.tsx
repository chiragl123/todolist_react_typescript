import React, { Dispatch, SetStateAction, useRef } from 'react';
import './styles.css';

interface Props{
    todo: string;
    setTodo: Dispatch<SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=> void;
}

const InputFields: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e)=>{
      handleAdd(e)
      inputRef.current?.blur();
      }}>
        <input
          ref={inputRef} 
          type='input' 
          value={todo} 
          placeholder='Enter task' className='input__box'
          onChange={(e)=> setTodo(e.target.value)}
        />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFields
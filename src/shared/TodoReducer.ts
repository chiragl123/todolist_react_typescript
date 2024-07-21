import { Todo } from './models';

// interface Actions{
//     type: 'ADD' | 'REMOVE' | "DONE";
//     payload: string | number
// }
type Actions =
    | {type: 'ADD', payload: string}
    | {type: 'REMOVE', payload: number}
    | {type: 'DONE', payload: number}

export const todoItemsState = {
    todos: []
};

const TodoReducer = (state: Todo[], action: Actions) =>{
    switch (action.type) {
        case "ADD":
            return[
                ...state,
                {id: Date.now(), todo: action.payload, isDone: false}
            ];
        case "REMOVE":
            return state.filter((todo)=> todo.id !== action.payload);
        case "DONE":
            console.log('DONE...',state, action.payload)
            return state.map((todo)=> todo.id === action.payload ? {...todo, isDone:!todo.isDone} : todo)          
        default:
            return state;
    }
}
export default TodoReducer;
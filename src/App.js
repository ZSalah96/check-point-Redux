
import { useSelector } from 'react-redux';
import './App.css';
import Input from './Components/Input';
import TodoItem from './Components/todoItem/TodoItem';
import { SelectTodoList } from './Redux/TodoSlice';

function App() {
  const todolist = useSelector(SelectTodoList);
  
  return (
    <div className='app'>
      <div className='to-do-container'>
        {todolist.map((todo)=>(
        <TodoItem key={todo.id} title={todo.title} done={todo.done} id={todo.id}/>
        ))}
      </div>
      <Input/>
    </div>
  )
}

export default App;

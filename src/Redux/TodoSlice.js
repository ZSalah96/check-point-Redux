import { createSlice } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
    try {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos === null) {
            return [];
        }
        return JSON.parse(savedTodos);
    } catch (err) {
        console.error("Error loading todos from local storage:", err);
        return [];
    }
};

const initialState = {
    todoList: loadTodosFromLocalStorage(), 
};

const TodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todoList));
            
        },
        setCheck: (state, action) => {
            state.todoList.forEach((todo) => {
                if (action.payload === todo.id) {
                    todo.done ? (todo.done = false) : (todo.done = true);
                }
            });
            localStorage.setItem("todos", JSON.stringify(state.todoList));
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todoList));
        },
     
    },
});

export const { saveTodo, setCheck, deleteTodo } = TodoSlice.actions;
export const SelectTodoList = (state) => state.todos.todoList;
export default TodoSlice.reducer;

export const fetchTodos = ({state}) => {
   state.todos = JSON.parse(localStorage.getItem("todos_storage")) || [];
};
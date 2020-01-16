import Vue from 'vue';

export const updateTodoList = (state, {todo, index}) => {
   let todoIndex = index ? index : state.todos.length;
   if(!todo) {
      return Vue.delete(state.todos, index);
   }
   Vue.set(state.todos, todoIndex, todo);
};

export const updateTodo = (state, {todoKey, props, values}) => {
   props.forEach((prop, index) => {
      state.todos[todoKey][prop] = values[index];
   });
};

export const removeAllCompleted = (state) => {
   state.todos = state.todos.filter((todo) => !todo.done);
};
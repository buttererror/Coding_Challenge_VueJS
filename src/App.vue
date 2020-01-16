<template>
  <v-app>
    <v-toolbar
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-layout
        class="mt-5"
        align-content-start
        fill-height
        justify-center
      >
        <v-flex xs7>
          <TodoForm />
          <TodoSummary />
          <TodoList />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import TodoForm from '@/components/todo-form'
import TodoList from '@/components/todo-list'
import TodoSummary from "@/components/todo-summary";
import {mapState, mapActions} from 'vuex';

export default {
  name: 'App',
  components: {
     TodoSummary,
     TodoForm,
     TodoList,
  },
  data () {
    return {
      title: 'Vue Todos'
    }
  },
   created() {
     this.fetchTodos();
   },
   computed: {
      ...mapState({
         todos: state => state.tasks.todos
      })
   },
   methods: {
      ...mapActions({
         fetchTodos: 'tasks/fetchTodos'
      }),
      saveTodos(todos) {
         localStorage.setItem("todos_storage", JSON.stringify(todos));
      }
   },
   watch: {
     todos: {
        handler(todos) {
           this.saveTodos(todos);
        },
        deep: true
     }
   }
}
</script>

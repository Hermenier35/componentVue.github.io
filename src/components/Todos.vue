<template>
    <div class="todolist">

      <h1>{{ titre }}</h1>

      <div>
        <input v-model="newTodoTitle" placeholder="Ajouter une nouvelle tâche" />
        <button @click="addTodo">Ajouter</button>
      </div>

      <div>
        <button @click="setFilter('all')">Toutes</button>
        <button @click="setFilter('active')">À Faire</button>
        <button @click="setFilter('completed')">Faites</button>
        <button @click="clearAllTodos">Supprimer</button>
      </div>

      <button @click="deleteCompletedTodos">Supprimer les Tâches Terminées</button>

      <div class="todo" v-for="todo in todosFiltre" :key="todo.id">
        <TodoComponent 
          :todo="todo" 
          @delete-todo="deleteTodo" 
          @edit-todo="editTodo"
          @update-todo="updateTodo"
        />
      </div>

      <footer v-if="nbrTask">
        <span>{{ nbrTask }} tâches restantes</span>
      </footer>

    </div>
  </template>
  
  <script lang="ts">

    import { Component, Vue, toNative } from "vue-facing-decorator";
    import TodoComponent from './TodoComponent.vue';
    import TODO from '@/TODO';

    @Component({
      components: {
        TodoComponent
      }
    })
    class Todos extends Vue {

      titre =  'Todos';
      todos: TODO[] = [];
      newTodoTitle: string = '';
      filter = 'all';

      addTodo() {
        if (this.newTodoTitle.trim()) {
          const newTodo = new TODO(
            Date.now(), 
            this.newTodoTitle,
            false
          );
          this.todos.push(newTodo);
          this.newTodoTitle = ''; 
        }
      }

      editTodo(updatedTodo:TODO) {
        const todo = this.todos.find(t => t.id === updatedTodo.id);
        if (todo) {
          todo.title = updatedTodo.title;
        }
      }

      updateTodo(updatedTodo: TODO) {
        const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
          this.todos.splice(index, 1, updatedTodo);
        }
      }

      clearAllTodos() {
        this.todos = [];
      }

      deleteTodo(id:number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }

      deleteCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.completed);
      }

      setFilter(filtre: string){
        this.filter = filtre;
      };

      get nbrTask() {
        return this.todos.filter(todo => !todo.completed).length;
      }

      get todosFiltre() {
        switch (this.filter) {
          case 'active':
            return this.todos.filter(todo => !todo.completed);
          case 'completed':
            return this.todos.filter(todo => todo.completed);
          default:
            return this.todos;
        }
      };

    }
    export default toNative(Todos)
  </script>
  
  <style>
    h1 {
      color: green;
      font-size: 48px;
      font-weight: bold;
    }
    
    p {
      font-size: 16px;
    }

    .todo {
      margin-top: 10px;
      color: white;
      display: block;
      border: 1px solid black;
    }

    .todolist{
      background-color: azure;
      padding: 2%;
      width: 400px;
    }
  </style>
  
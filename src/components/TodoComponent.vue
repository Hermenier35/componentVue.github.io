<template>
    <div class="task">
        <input type="checkbox" v-model="todo.completed" @change="emitUpdate">
        <div v-if="isEditing">
            <input v-model="editedTitle" @keyup.enter="saveEdit" @blur="saveEdit" />
        </div >
        <h2 v-background="todo.completed" v-else @dblclick="editTodo"> {{ todo.title }} </h2>
        <button @click="emitDelete">Supprimer</button>
    </div>
  </template>
  
  <script lang="ts">
    import { Component, Vue, Prop, Emit } from "vue-facing-decorator";
    import TODO from '@/TODO';
    
    @Component({
        emits: ['edit-todo']
    })
    class TodoComponent extends Vue {
        @Prop() readonly todo!: TODO;
        @Emit('delete-todo')
            emitDelete() {
                return this.todo.id;
            }
        @Emit('update-todo')
            emitUpdate() {
                return this.todo;
            }
        isEditing: boolean = false;
        editedTitle: string = '';
        
        editTodo() {
            this.isEditing = true;
            this.editedTitle = this.todo.title;
        }

        saveEdit() {
            this.isEditing = false;
            this.$emit('edit-todo', { id: this.todo.id, title: this.editedTitle });
        }

    }
    export default TodoComponent;
  </script>
  
  <style scoped>
    .task{
        display: flex;
    }

    h2{
        width: 300px;
        text-align: center;
    }

    input[type='checkbox']{
        margin: 2%;
    }
  </style>
  
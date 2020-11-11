<template>
  <div class="col-md-12 mt-3">
    <Alert :message="message" />
    <div class="form-group">
      <label for="">Todo:</label><br />
      <input type="text" class="form-control mb-1" v-model="newTodo" />
      <button @click="addNewTodo" class="btn btn-primary">Add</button>
    </div>

    <ul class="list-group">
      <li class="list-group-item" v-for="(todo, indice) in todos" :key="todo">
        {{ todo }}
        <button class="float-right btn btn-danger ml-1" @click="removeTodo(indice)">
          Delete
        </button>
        <button class="float-right btn btn-primary" @click="editTodo(indice)">
          Edit
        </button>&nbsp;&nbsp;
      </li>
    </ul>
  </div>
</template>
<script>
import TodoService from "../services/TodoService";
import Alert from "./Alert";

const todoService = new TodoService();

export default {
  name: "TodoList",
  components: {
    Alert
  },
  data: function () {
    return {
      message: "",
      editMode: false,
      indiceTodoEdit: null,
      newTodo: "",
      todos: todoService.getAll(),
    };
  },
  methods: {
    resetDatas() {
      this.newTodo = "";
      this.editMode = false;
      this.indiceTodoEdit = null;
      this.message = "";
    },
    isEditingRegister() {
      return this.editMode;
    },
    addNewTodo() {
      if (this.isEditingRegister()) {
          todoService.edit(this.indiceTodoEdit, this.newTodo);
          this.resetDatas();
          return;
      }

      try {
        todoService.add(this.newTodo);
        this.resetDatas();
      } catch(error) {
        this.message = error.message;
      }
     
    },
    removeTodo(indice) {
      todoService.remove(indice);
    },
    editTodo(indice) {
      this.newTodo = this.todos[indice];
      this.editMode = !this.editMode;
      this.indiceTodoEdit = indice;
    },
  },
};
</script>

<style scoped>
</style>
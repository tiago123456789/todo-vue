<template>
  <div class="container">
    <div class="row">
      <TodoList />
    </div>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style scoped>

</style>

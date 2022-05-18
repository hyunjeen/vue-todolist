<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput ></TodoInput>
    <TodoList ></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  data() {
    return {
      
    };
  },
  methods: {      
    
  },
  
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>


<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border: groove;
  width: 200px;
}
button {
  border: groove;
}
.shadow {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.03);
}
</style>
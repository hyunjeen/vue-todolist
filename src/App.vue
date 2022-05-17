<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addtodoitem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneitem" v-on:toggle="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearremove="clearOne"></TodoFooter>
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
      todoItems: [],
    };
  },
  methods: {
    addOneItem(item) {
      const obj = { checked: false, todoItem: item };
      localStorage.setItem(item, JSON.stringify(obj));
      this.todoItems.push(obj);

    },
    removeOneitem(item, index) {
      localStorage.removeItem(item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoitem, index) {
      this.todoItems[index].checked = !this.todoItems[index].checked
      localStorage.removeItem(todoitem.todoItem)
      localStorage.setItem(todoitem.todoItem, JSON.stringify(todoitem))
    },
    clearOne() {
      localStorage.clear();
      this.todoItems.splice(0, this.todoItems.length)
    }
  },
  created() {
    if (localStorage.length > 0) {
      let keys = Object.keys(localStorage);
      for (const key of keys) {
        this.todoItems.push(JSON.parse(localStorage.getItem(key)));
      }
    }
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
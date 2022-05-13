<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        const obj = { checked: false, todoItem: this.newTodoItem };
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearinput();
      }
    },
    clearinput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  display: flex;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-radius: 5px;
}
.inputBox input {
  flex-grow: 1;
  border-style: none;
  font-size: 0.9rem;
  padding: 0 10px 0 50px;
}
.addContainer {
  color: #fff;
  background: linear-gradient(to right, #6478fb, #8763fb);
  width: 3rem;
  display: block;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: opacity 0.1s ease-in-out;
}
.addContainer:hover {
  opacity: 0.7;
}
</style>
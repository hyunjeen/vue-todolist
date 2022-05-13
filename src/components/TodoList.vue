<template>
  <div>
    <ul>
      <li
        v-for="(todoItem, index) in todoItems"
        v-bind:key="todoItem.todoItem"
        class="shadow"
      >
        <i
          class="checkBtn fa-solid fa-check"
          v-on:click="toggleComplete(todoItem)"
          v-bind:class="{ checkComplete: todoItem.checked }"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.checked }">{{
          todoItem.todoItem
        }}</span>
        <span
          class="removeBtn"
          v-on:click="removeTodo(todoItem.todoItem, index)"
        >
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      let keys = Object.keys(localStorage);
      for (const key of keys) {
        this.todoItems.push(JSON.parse(localStorage.getItem(key)));
      }
    }
  },
  methods: {
    removeTodo(item, index) {
      localStorage.removeItem(item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(todoitem) {
      todoitem.checked = !todoitem.checked;
      localStorage.removeItem(todoitem.todoItem)
      localStorage.setItem(todoitem.todoItem, JSON.stringify(todoitem))
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  align-items: center;
  height: 50px;
  min-height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background-color: #fff;
  border-radius: 5px;
}

.checkBtn {
  line-height: 40px;
  color: #62acde;
  margin-right: 5px;
}
.checkComplete {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
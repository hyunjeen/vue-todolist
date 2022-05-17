<template>
  <div>
     <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in propsdata"
        v-bind:key="todoItem.todoItem"
        class="shadow"
      >
        <i
          class="checkBtn fa-solid fa-check"
          v-on:click="toggleComplete(todoItem, index)"
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
    </transition-group>
  </div>
</template>

<script>
export default {
  props : ['propsdata'],
  methods: {
    removeTodo(item, index) {
      this.$emit('removeItem',item,index)
     
    },
    toggleComplete(todoitem ,index) {
      this.$emit('toggle', todoitem, index)
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

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
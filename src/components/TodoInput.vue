<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus"></i>
    </span>
    <CustomModal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">경고 <i class="closeModalBtn fa-solid fa-xmark" @click="showModal = false"></i></h3>
    <p slot="body">아무것도 입력하지 않으셨습니다</p>
  </CustomModal>   
  </div>
</template>

<script>
import CustomModal from './common/CustomModal.vue'
export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        this.$emit('addtodoitem', this.newTodoItem)
        this.clearinput();       
      }else {
        this.showModal = !this.showModal
      }
    },
    clearinput() {
      this.newTodoItem = "";
    },
  },
  components : {
    CustomModal
  }
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

.closeModalBtn {
  color: #42b983
  }
</style>
<template>
  <div class="allRemoveContainer shadow">
    <span class="allRemove" v-on:click="allRemove">
      clear all
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    allRemove() {
      localStorage.clear()
    }
  }
}
</script>

<style scoped>
.allRemoveContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
}
.allRemove {
  text-transform: uppercase;
  color: #e20303;
  display: block;
}
</style>
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
const storage = {
  fetch() {   
    const arr = [] 
      if (localStorage.length > 0) {
        let keys = Object.keys(localStorage);
        for (const key of keys) {
          arr.push(JSON.parse(localStorage.getItem(key)));
        }
      }
      return arr   
  }
}
export const store = new Vuex.Store({
  state: {    
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, item) {
      const obj = { checked: false, todoItem: item };
      localStorage.setItem(item, JSON.stringify(obj));
      state.todoItems.push(obj);
      
    },
    removeOneitem(state, payload) {
      localStorage.removeItem(payload.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {      
      state.todoItems[payload.index].checked = !state.todoItems[payload.index].checked      
      localStorage.removeItem(payload.todoObj.todoItem)
      localStorage.setItem(payload.todoObj.todoItem, JSON.stringify(payload.odoObj))
    },
    clearremove(state) {
      localStorage.clear();
      state.todoItems.splice(0, state.todoItems.length)
    }
  }
})
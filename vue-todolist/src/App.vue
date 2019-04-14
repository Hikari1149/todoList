<template>
  <div id="app">
    <input v-model="inputVal"/>
    <button v-on:click="handleAdd">add</button>
    <ul>
      <todoItem v-for="(item,index) of todoList"
                v-bind:item="item"
                v-bind:index="index"
                v-bind:key="index"
                v-on:delete="handleDelte"

      >
      </todoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'app',
  components: {
    inputVal:'',
    todoItem:TodoItem
  },
  data(){
      return {
          todoList:[11,22],
      }
  },
  methods:{
      handleAdd(){
          this.todoList.push(this.inputVal);
          this.inputVal='';
      },
      handleDelte(index){
          this.todoList.splice(index,1);
      }
  }
}
/*
 v-for循环展示数据. v-model=inputVal用于vm的双向绑定.
 将input数据添加进list v-on:click
 子组件使用this.$emit向父组件发布事件, 父组件v-on:(xxx)监听事件并处理.
*/

</script>
<style>
</style>


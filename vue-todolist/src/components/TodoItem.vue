<template>
  <li class="TodoItem"
      v-on:click="handleDelete"
  >
    {{item}} {{index}}
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props:['item','index'],
  methods:{
      handleDelete(){
          this.$emit('delete',this.index);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

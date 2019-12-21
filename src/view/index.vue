<template>
  <div>
    <h1>{{$store.state.count}}</h1>
    <Button type="primary" @click="change">点击</Button>

  </div>
</template>

<script>
  export default {
    methods: {
      change() {
        this.$store.dispatch("changes");
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
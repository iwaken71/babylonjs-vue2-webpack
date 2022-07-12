<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue Component'
    }
  }
}
</script>

<style scoped>
.example{
  font-weight: bold;
}
</style>
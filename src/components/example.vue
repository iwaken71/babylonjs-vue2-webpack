<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
import BabylonScene from './BabylonScene.vue';
export default {
  components: { BabylonScene },
  data() {
    return {
      msg: 'Hello Vue Component',
    };
  },
  created() {
    const webpack_babel = 'Babel check';
    console.log(webpack_babel);
  },
};
</script>

<style scoped>
.example{
  font-weight: bold;
}
</style>
<template>
  <div>
    <canvas id="renderCanvas"></canvas>
  </div>
</template>

<script>
import { createScene } from "../scenes/MyFirstScene";

export default {
  name: "BabylonScene",

  mounted() {
    const canvas = document.getElementById("renderCanvas");
    createScene(canvas);
  },
};
</script>

<style type="text/css">
  body {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
    }
    #renderCanvas {
        margin: 0;
        padding: 0;
        width: 960px;
        height: 540px;
    }
</style>
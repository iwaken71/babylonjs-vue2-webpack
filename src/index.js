import Vue from 'vue';

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
  },
  render: function (createElement) {
    return createElement('h1', this.message);
  },
});
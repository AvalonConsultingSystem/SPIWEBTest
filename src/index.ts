import Vue from "vue";

const msg:string = 'HelloWorld';
console.log(msg);
console.log('HEllo!!');

const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
})

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})


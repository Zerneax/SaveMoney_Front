<template>
  <body>
    <span> Configuration des seuils </span>
    <input type="text" placeholder="test..." v-model="msg"/>
    <span> {{msg}} </span>
      <button class="ui red button" v-on:click="testFunction()" > Dispatch </button>
  </body>
</template>

<script>

import { serverBus } from '../../main';
export default {
  name: 'Config',
  props: {
    msg: String
  },
  data() {
    return {
      test: 'test',
      test2: 'test2'
    };
  },
  methods: {
    testFunction() {
      console.log("$emit", this.msg);
      serverBus.$emit('test-has-changed', this.$data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>

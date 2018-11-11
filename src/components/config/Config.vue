<template>
  <body>
    <span> Configuration des seuils </span>
    <input type="text" placeholder="test..." v-model="msg"/>
    <span> {{msg}} </span>
      <button class="ui red button" v-on:click="testFunction()" > Dispatch </button>
  </body>
</template>

<script src="./Config.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Config.css"></style>

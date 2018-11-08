<template>
  <body>
    <span> Affichage des graphiques et des dépenses/rentrées </span>
    <div class="ui two column grid">
      <div class="column">
        <div class="ui segment">
        </div>
        <div class="ui segment">
        </div>
      </div>
      <div class="column">
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'TableauDeBord',
  props: {
    msg: String
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

<template>
  <body>
    <h3 is="sui-header"> Gerer votre budget !! </h3>
    <div class="ui two column grid">
      <div class="column" id="graph">
        <div class="ui segment charts">
          <IEcharts id="jauge" :option="jauge" style="width: 100%; height: 400px;" v-on:click="updateMaxJauge()"></IEcharts>
        </div>
        <div class="ui segment">
        </div>
      </div>
      <div class="column" id="tableau">
        <sui-tab>
          <sui-tab-pane title="Dépenses" >
            <sui-table celled padded id="Depenses">
              <sui-table-header>
                <sui-table-row>
                  <sui-table-header-cell> Date </sui-table-header-cell>
                  <sui-table-header-cell> Montant </sui-table-header-cell>
                  <sui-table-header-cell> Description </sui-table-header-cell>
                </sui-table-row>
              </sui-table-header>
              <sui-table-body>
                <sui-table-row v-for="depense in depenses">
                  <sui-table-cell> {{depense.date}} </sui-table-cell>
                  <sui-table-cell> {{depense.montant}} </sui-table-cell>
                  <sui-table-cell> {{depense.description}} </sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>
          </sui-tab-pane>
          <sui-tab-pane title="Revenus" >
            <sui-table celled padded id="Revenus">
              <sui-table-header>
                <sui-table-row>
                  <sui-table-header-cell> Date </sui-table-header-cell>
                  <sui-table-header-cell> Montant </sui-table-header-cell>
                  <sui-table-header-cell> Description </sui-table-header-cell>
                </sui-table-row>
              </sui-table-header>
              <sui-table-body>
                <sui-table-row v-for="revenu in revenus">
                  <sui-table-cell> {{revenu.date}} </sui-table-cell>
                  <sui-table-cell> {{revenu.montant}} </sui-table-cell>
                  <sui-table-cell> {{revenu.description}} </sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>
          </sui-tab-pane>
        </sui-tab>
      </div>
    </div>
  </body>
</template>

<script src="./TableauDeBord.js"></script>

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
#jauge {
  margin-left: auto;
  margin-right: auto;
}
#graph {
  width: 40%;
}
#tableau {
  width: 60%;
}

</style>

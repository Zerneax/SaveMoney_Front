<template>
  <body>
    <div class="ui two column grid">
      <div class="column" id="graph">
        <div class="ui segment">
          <IEcharts id="jauge" :option="jauge" style="width: 100%; height: 400px;"></IEcharts>
          <p style="text-align: center">
            <font-awesome-icon :icon="iconJauge" size="2x" :style="{color: colorIconJauge}"/>
            {{messageJauge}}
          </p>
        </div>
        <div class="ui segment">
          <IEcharts id="bar" :option="bar" style="width: 100%; height: 400px;"></IEcharts>
        </div>
      </div>
      <div class="column" id="tableau">
        <div>
        <sui-tab  :active-index.sync="activeTab" id="Suitab">
          <sui-tab-pane title="Dépenses" >
            <sui-table celled padded id="Depenses">
              <sui-table-header>
                <sui-table-row>
                  <sui-table-header-cell> Date </sui-table-header-cell>
                  <sui-table-header-cell> Montant </sui-table-header-cell>
                  <sui-table-header-cell> Description </sui-table-header-cell>
                  <sui-table-header-cell> Type </sui-table-header-cell>
                </sui-table-row>
              </sui-table-header>
              <sui-table-body>
                <sui-table-row v-for="depense in depenses">
                  <sui-table-cell> {{depense.date}} </sui-table-cell>
                  <sui-table-cell> {{depense.montant}}€ </sui-table-cell>
                  <sui-table-cell> {{depense.description}} </sui-table-cell>
                  <sui-table-cell> {{depense.type}} </sui-table-cell>
                </sui-table-row>
                <!-- Ligne pour ajouter dans le tableau -->
                <sui-table-row v-show="ajoutLigne">
                  <sui-table-cell>
                    <input class="ui input" placeholder="date..." v-model="newLigne.date"/>
                  </sui-table-cell>
                  <sui-table-cell>
                    <input class="ui input" placeholder="montant..." v-model="newLigne.montant"/>
                  </sui-table-cell>
                  <sui-table-cell>
                    <input class="ui input" placeholder="description..." v-model="newLigne.description"/>
                  </sui-table-cell>
                  <sui-table-cell>
                    <sui-dropdown placeholder="type..." selection :options="typeDepense" v-model="newLigne.type"/>
                  </sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>
            <button class="ui red button" v-on:click="ajouterLigne()"> Ajouter une ligne </button>
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
                  <sui-table-cell> {{revenu.montant}}€ </sui-table-cell>
                  <sui-table-cell> {{revenu.description}} </sui-table-cell>
                </sui-table-row>
                <!-- Ligne pour ajouter dans le tableau -->
                <sui-table-row v-show="ajoutLigne">
                  <sui-table-cell>
                    <input class="ui input" placeholder="date..." v-model="newLigne.date"/>
                  </sui-table-cell>
                  <sui-table-cell>
                    <input class="ui input" placeholder="montant..." v-model="newLigne.montant"/>
                  </sui-table-cell>
                  <sui-table-cell>
                    <input class="ui input" placeholder="description..." v-model="newLigne.description"/>
                  </sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>
            <button class="ui red button" v-on:click="ajouterLigne()"> Ajouter une ligne </button>
          </sui-tab-pane>
        </sui-tab>
      </div>
        <div class="ui segment" id="infos">
          <p> Test </p>
        </div>
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
#Suitab {
  display: block;
  height: 50%;
  overflow: scroll;
}
#infos {
  display: block;
  height: 50%;
}

</style>

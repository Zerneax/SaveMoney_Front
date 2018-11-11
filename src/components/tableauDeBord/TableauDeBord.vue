<template>

  <!-- TODO : regarder pour le côté responsive ici : https://semantic-ui.com/elements/container.html -->
  <body>
    <input type="text" placeholder="test..." v-model="test"/>
    <div class="ui two column grid">
      <div class="column" id="graph">
        <div class="ui two column grid">
          <div class="column">
          <IEcharts id="jauge" :option="jauge" style="width: 100%; height: 400px;"></IEcharts>
          <p style="text-align: center">
            <font-awesome-icon :icon="iconJauge" size="2x" :style="{color: colorIconJauge}"/>
            {{messageJauge}}
          </p>
        </div>
        <div class="column">
          <IEcharts id="jauge" :option="jauge" style="width: 100%; height: 400px;"></IEcharts>
          <p style="text-align: center">
            <font-awesome-icon :icon="iconJauge" size="2x" :style="{color: colorIconJauge}"/>
            {{messageJauge}}
          </p>
        </div>
        </div>
        <div class="ui segment">
          <IEcharts id="pie" :option="pie"></IEcharts>
        </div>
      </div>
      <div class="column" id="tableau">
        <div>
        <sui-tab :active-index.sync="activeTab" id="Suitab">
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
                    <input class="ui input" placeholder="montant..." v-model="newLigne.montant"/><span>€</span>
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
      <sui-divider hidden />
        <div class="ui two column grid" id="infos">
          <div class="column" id="comptes">
            <h3 is="sui-header"> Vos Comptes </h3>
            <div class="ui segment">
              <font-awesome-icon icon="coins" size="4x"/>
              <div class="content">
                <div class="title">Compte Courant Simple</div>
                <div class="description">1000000€</div>
              </div>
            </div>
            <div class="ui segment">
              <font-awesome-icon icon="envelope" size="4x"/>
              <div class="content">
                <div class="title">Compte Courant Joint</div>
                <div class="description">150789€</div>
              </div>
            </div>
            <!-- <div class="ui segment">
              <font-awesome-icon icon="euro-sign" size="4x"/>
              <div class="content">
                <div class="title">Compte Courant Simple</div>
                <div class="description">10879€</div>
              </div>
            </div>
            <div class="ui segment">
              <font-awesome-icon icon="euro-sign" size="4x"/>
              <div class="content">
                <div class="title">Compte Courant Simple</div>
                <div class="description">10879€</div>
              </div>
            </div> -->
          </div>
          <div class="ui column">
            <h3 is="sui-header" icon text-align="center" >
              <sui-icon name="users" circular />
              <sui-divider horizontal> Contacts </sui-divider>
              <!-- <sui-header-content>Contacts</sui-header-content> -->
            </h3>
            <p> Assurance </p>
            <p> Auto : MAIF </p>
            <p> 06 06 06 06 06 </p>
            <p> Habitation : Sogessur </p>
            <p> 06 06 06 06 06 </p>
            <p> Banque </p>
            <p> Mr XXXXX </p>
            <p> 06 06 06 06 06 </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script src="./TableauDeBord.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./TableauDeBord.css">
</style>

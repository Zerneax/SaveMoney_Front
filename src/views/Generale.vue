<template>
  <div class="generale">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="ui menu pointing secondary">
      <a
        is="sui-menu-item"
        v-for="menu in menus"
        :active="isActive(menu)"
        :key="menu"
        :content="menu"
        @click="select(menu)"
      />
      <div class="menu menu right">
        <a is="sui-menu-item">
          <h2> {{whoAmI}} </h2>
        </a>
      </div>
    </div>
    <TableauDeBord v-if="active == 'Tableau de Bord'"/>
    <Config v-if="active == 'Parametre'"/>
  </div>
</template>


<script>

import TableauDeBord from '@/components/TableauDeBord.vue'
import Config from '@/components/Config.vue'

export default {
  name: 'generale',
  components: {
    TableauDeBord,
    Config
  },
  data() {
    return {
      whoAmI: 'Bonjour Christopher !',
      active: 'Tableau de Bord',
      menus: ['Tableau de Bord', 'Parametre'],
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  }
}
</script>

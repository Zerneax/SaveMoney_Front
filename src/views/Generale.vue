<template>
  <div class="generale">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="ui menu pointing secondary">
      <a
        is="sui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        @click="select(item)"
      />
      <div class="menu menu right">
        <a is="sui-menu-item" content="Bonjour Christopher !"/>
      </div>
    </div>
    <TableauDeBord v-if="active == 'TableauDeBord'"/>
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
      active: 'TableauDeBord',
      items: ['TableauDeBord', 'Parametre'],
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

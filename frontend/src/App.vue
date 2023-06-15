<template>
  <v-app>
    <v-container>
      <div class="backImg" style="display: flex; flex-direction: column; padding-inline: 100px">
        <header-component/>
        <router-view style="margin-top: 10px;"/>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import header from './components/header.vue'

export default {
  name: 'App',

  components: {
    "header-component": header,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.backImg {
  background-image: url('./assets/backImg.png');
}
</style>

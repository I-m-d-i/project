<template>
  <v-app>
    <main-page/>
  </v-app>
</template>

<script>
import main from './components/main-page';

export default {
  name: 'App',

  components: {
    "main-page": main,
  },

  data: () => ({
    //
  }),
};
</script>

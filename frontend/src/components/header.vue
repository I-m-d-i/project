<script>

export default {
  name: "header-component",
  data: () => ({}),
  methods: {
    async scrollTo(id) {
      if (id === 'ourServices') {
        if (this.$route.name!=="home"){
          await this.$router.push({path: '/'})
        }
      }
      await this.$nextTick()
      const el = document.getElementById(id);
      el.scrollIntoView({behavior: "smooth"});
    }
  }

}
</script>

<template>
  <v-row style="margin-top: 10px; max-height: 150px; width: 100%; padding: 10px;     flex-wrap: nowrap;">
    <div @click="$router.push({path:'/'})" style="display: flex;
    cursor: pointer;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;">
      <v-img
          src="../assets/tooth.png"
          max-height="89"
          max-width="74"/>
      <p class="DentistryName">
        СТОМАТОЛОГИЯ <br/>
        доктора Шувалова
      </p>
    </div>
    <v-spacer></v-spacer>
    <div class="nav">
      <v-col>
        <v-btn href="/#/license" text class="License LOCSlot" v-ripple="false"> Лицензия</v-btn>
      </v-col>
      <v-col>
        <v-btn text class="OurServices LOCSlot" @click="scrollTo('ourServices')" v-ripple="false">Наши услуги</v-btn>
      </v-col>
      <v-col>
        <v-btn href="/#/reviews" text class="Reviews LOCSlot">Отзывы</v-btn>
      </v-col>
      <v-col>
        <v-btn href="/#/contacts" text class="Contacts LOCSlot">Контакты</v-btn>
      </v-col>
    </div>
    <v-spacer></v-spacer>

    <v-col>
      <v-btn text class="Phone LOCSlot" disabled>+7 (391) 295-02-36</v-btn>
    </v-col>
  </v-row>
</template>

<style scoped>
.v-application p {
  margin-bottom: 0 !important;
}

.nav {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  align-content: center;
}

.DentistryName {
  padding-left: 0 !important;
}

.DentistryName {
  color: rgba(5, 21, 87, 1)
}

.License >>> .v-btn__content {
  padding-right: 0 !important;
  margin-top: 0 !important;
  margin-right: 0 !important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.v-btn:before {
  opacity: 0 !important;
}

.Reviews >>> .v-btn__content {
  padding-right: 0 !important;
  margin-top: 0 !important;
  margin-right: 0 !important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  pointer-events: none;
  color: #000000;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.OurServices >>> .v-btn__content {
  padding-right: 0 !important;
  margin-top: 0 !important;
  margin-right: 0 !important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  pointer-events: none;
  color: #000000;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.Contacts >>> .v-btn__content {
  padding-right: 0 !important;
  margin-top: 0 !important;
  margin-right: 0 !important;
  width: 100px;
  height: 33px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.Phone >>> .v-btn__content {
  padding-right: 0 !important;
  margin-top: 0 !important;
  margin-right: 0 !important;
  width: 200px;
  height: 33px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.LOCSlot >>> .v-btn__content {
  background: #ffffff00 !important;
  text-transform: none !important;
}
</style>
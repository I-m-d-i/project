<script>

export default {
  name: "contacts-view"
}
</script>

<template>
  <v-flex style="margin-left: 100px">
    <div>
      <p>Телефон</p>
      <a href="tel:+7 (391) 295-02-36">+7 (391) 295-02-36</a>
    </div>
    <div style="margin-top: 50px">
      <p style="padding-bottom: 30px">Адрес</p>
      <a href="geo:56.064060,92.938356">Красноярск, Мате Залки, 10г, 322 кабинет; 3 этаж
        <br>
        Район Северный, район Советский</a>
    </div>
    <div style=" margin-top: 50px;">
      <p>
        Время работы
      </p>
      <p>
        Пн-пт: 10:00—20:00
      </p>
      <p>
        Сб 10:00–14:00
      </p>
    </div>
  </v-flex>
</template>

<style scoped>
p {
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
}
</style>
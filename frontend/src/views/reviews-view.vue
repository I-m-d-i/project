<script>
export default {
  name: "reviews-view",
  data() {
    return {
      agreement: false
    }
  }
}
</script>

<template>
  <div style="padding-inline: 150px">
    <div>
      <h2> Отзывы </h2>
      <v-divider style="margin-block: 30px"/>
      <div style="padding-inline: 10px">
        <v-textarea
            label="Ваш отзыв..."
            outlined
            no-resize
            hide-details
            filled>

        </v-textarea>
        <div style="display: flex; margin-top: 20px">
          <v-textarea
              style="margin-top: 5px;"
              label="Ваше имя..."
              outlined
              no-resize
              rows="1"
              hide-details
              filled
          >

          </v-textarea>
          <div style="margin-left: 15px">
            <v-checkbox v-model="agreement">
              <template v-slot:label>
                <div>
                  Я согласен на
                  <v-tooltip location="bottom">
                    <template v-slot:activator="{ props }">
                      <a
                          target="_blank"
                          href=""
                          v-bind="props"
                          @click.stop
                      >
                        обработку персональных данных
                      </a>
                    </template>

                  </v-tooltip>
                </div>
              </template>
            </v-checkbox>
          </div>
        </div>

      </div>
    </div>
    <div style="height: 25em;
  display: flex;
  align-items: center;
  justify-content: center">

      <p style="  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 19px;
color: #006585;
margin: 0">
        Ваш отзыв будет первым!
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
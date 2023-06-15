<script>

export default {
  name: "homeView",
  data() {
    return {
    };
  },
  methods:{

  }
}
</script>

<template>
  <v-flex id="services" class="backImg" style="margin-top: 104px">
    <v-row style="margin-top: 70px">
      <v-col style="">
        <div>
          <p style="
                font-style: normal;
                font-weight: 700;
                margin-bottom: 0;
                font-size: 32px;
                line-height: 60px;
                color: #00A2B8;
                text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);">
            Стоматология
            <br>
            в Красноярске
          </p>
          <p style="
                font-style: normal;
                font-weight: 700;
                margin-bottom: 0;
                font-size: 20px;
                line-height: 37px;
                color: #313131;
                text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);">
            Для тех, кто боится
          </p>
        </div>
        <v-row style="margin-top: 158px;margin-left: 0;align-items: center;">
          <v-img src="../assets/img_1.png"
                 max-height="47"
                 max-width="47"/>
          <div>
            <v-row>
              <p style="
                    font-style: normal;
                    font-weight: 700;
                    margin-bottom: 0;
                    margin-left: 15px;
                    font-size: 16px;
                    line-height: 30px;
                    color: #00A2B8;
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
                Врач всегда на связи
              </p>
            </v-row>
            <v-row>
              <p style="
                    margin-bottom: 0;
                    margin-left: 15px;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 26px;
                    color: #746868;
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
                по телефону
              </p>
            </v-row>
          </div>
        </v-row>
      </v-col>
      <v-spacer/>
      <v-col>
        <div style="display: flex;  margin-bottom: 40px;
          flex-direction: column;
          justify-content: center;
          align-items: center;">
          <div style="font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 18px;
                  text-align: center;
                  color: #5C5B5B;">
            <p>
              МЫ ВСЕГДА РАДЫ БЫТЬ ПОЛЕЗНЫМИ ДЛЯ ВАС!
              <br>
              Мы будем очень благодарны Вам, если Вы
              <br>
              оставите свой отзыв или пожелание
            </p>
          </div>
          <div style="width: 409px; display:inline-grid; align-content: space-around;
                height: 457px;
                background: rgba(184, 189, 188, 0.34);
                border-radius: 16px;">
            <div style="display:flex; flex-direction: row; flex-wrap: nowrap; justify-content: center;">
              <p style="font-style: normal; margin-left: 39px; margin-right: 39px; margin-bottom: 0;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 24px;
                    color: #3E3C3C;">
                Запишитесь на диагностику
              </p>
            </div>
            <div>
              <v-text-field style="margin-left: 25px; margin-right: 25px" background-color="white"
                            label="Ваше имя" flat filled solo hide-details/>
              <v-text-field style="margin-top: 50px; margin-left: 25px; margin-right: 25px" background-color="white"
                            placeholder="+ 7 (999) 999-99-99" flat filled solo hide-details/>
            </div>
            <div style="display: flex; flex-direction: row">
              <v-checkbox style="margin-top: 0; margin-left: 20px"/>
              <p style="font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 14px;
                    color: #000000;">
                Я даю согласие на обработку своих персональных данных, в соответствии с «Политикой
                конфиденциальности».
              </p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <div id="ourServices">
      <p style="font-style: normal;
                  font-weight: 400;
                  font-size: 30px;
                  line-height: 37px;
                  text-align: center;
                  color: #0FA7BC;
                  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
        Наши услуги
      </p>
      <v-row style="font-style: normal; margin-left: 43px; margin-top: 120px;
               font-weight: 400;
               font-size: 24px;
               line-height: 28px;
               text-align: center;
               color: #00A2B8;
               text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);">
        <v-col>
          <div style="width: 409px; display: flex; justify-content: center; align-items: center;
                  height: 74px;
                  left: 51px;
                  top: 1094px;
                  background: rgba(217, 217, 217, 0.49);
                  border-radius: 15px;">
            <p>
              Терапевтические
            </p>
          </div>
        </v-col>
        <v-col>
          <div style="width: 409px; display: flex; justify-content: center; align-items: center;
                  height: 74px;
                  left: 51px;
                  top: 1094px;
                  background: rgba(217, 217, 217, 0.49);
                  border-radius: 15px;">
            <p>
              Ортопедические
            </p>
          </div>
        </v-col>
        <v-col>
          <div style="width: 409px; display: flex; justify-content: center; align-items: center;
                  height: 74px;
                  left: 51px;
                  top: 1094px;
                  background: rgba(217, 217, 217, 0.49);
                  border-radius: 15px;">
            <p>
              Хирургические
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
    <p style="font-style: normal; margin-left: 63px; margin-top: 123px;
          font-weight: 400;
          font-size: 30px;
          line-height: 34px;
          color: #2185E1;">
      СТОМАТОЛОГИЧЕСКАЯ КЛИНИКА «СтАМи»
    </p>
    <div class="Description" style="margin-left: 125px; margin-top: 40px">
      <p>
        Мы предоставляем стоматологические услуги на самом высоком уровне, работаем не только с жителями
        <br>
        города Красноярска, но и Красноярского края.
        <br>
        Выбор «своей стоматологии» всегда стоит за Пациентом.
        <br>
        И здесь важны самые строгие критерии:
        <br>
      </p>
      <ul>
        <li>
          доверие к лечащему врачу;
        </li>
        <li>
          точная диагностика;
        </li>
        <li>
          качественное лечение;
        </li>
        <li>
          опытные специалисты;
        </li>
        <li>
          применение новейших технологий и материалов;
        </li>
        <li>
          современное оборудование.
        </li>
      </ul>
      <p>
        Для пациента также важны «разумные цены» на стоматологические услуги при их хорошем качестве.
        <br>
        Именно на этом руководство ежедневно концентрирует свое внимание.
      </p>
    </div>
    <div style="margin-top: 90px">
      <ul style="display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 34px;
            text-align: center;
            color: #2185E1;">
        <li style="list-style-type: none;">
          НАША ОСНОВНАЯ РЕКЛАМА - ЭТО НАШИ ПАЦИЕНТЫ!
        </li>
        <li style="list-style-type: none;">
          МЫ ДОРОЖИМ СВОЕЙ РЕПУТАЦИЕЙ И ДОВЕРИЕМ
        </li>
        <li style="list-style-type: none;">
          СВОИХ ПАЦИЕНТОВ!У НАС ЛЕЧАТСЯ СЕМЬЯМИ, НАС
        </li>
        <li style="list-style-type: none;">
          РЕКОМЕНДУЮТ СВОИМ ДРУЗЬЯМ!
        </li>
      </ul>
    </div>
  </v-flex>

</template>

<style scoped>
.v-text-field--outlined, .v-text-field--solo {
  border-radius: 15px;
}
</style>
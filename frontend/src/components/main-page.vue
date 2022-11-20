<template>
  <v-layout style="display: flex; flex-direction: column;">
    <v-flex class="backImg" style="margin-top: 69px;">
      <v-row>
          <v-img src="../assets/tooth.png" style="margin-left: 179px"
               max-height="89"
               max-width="74"/>
          <v-textarea class="DentistryName" value="СТОМАТОЛОГИЯ
доктора Шувалова" dense no-resize solo flat hide-details disabled/>
        <v-col lg="1" style="margin-left: 110px">
          <v-btn text class="License LOCSlot" @click="scrollToLicens" v-ripple="false"> Лицензия</v-btn>
        </v-col>
        <v-col lg="1" style="margin-left: 110px">
          <v-btn text class="OurServices LOCSlot" @click="scrollToServices" v-ripple="false">Наши услуги</v-btn>
        </v-col>
        <v-col lg="1" style="margin-left: 110px">
          <v-btn text class="Contacts LOCSlot" disabled>Контакты</v-btn>
        </v-col>
        <v-col lg="1" style="margin-left: 110px">
          <v-btn text class="Phone LOCSlot" disabled>+7 (391) 295-02-36</v-btn>
        </v-col>
      </v-row>
      <v-row style="margin-top: 70px">
        <v-col style="margin-left: 179px;">
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
          <v-row style="margin-top: 158px;">
            <v-img src="../assets/img_1.png"
                   max-height="42"
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
        <v-col style="margin-right: 179px;">
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
                              label="Ваше имя" flat filled solo hide-details />
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
                  Я даю согласие на обработку своих персональных данных, в соответствии с «Политикой конфиденциальности».
                </p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-flex>
    <v-flex id="services" class="backImg" style="margin-top: 104px">
      <div>
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
      <v-row>
        <v-col style="margin-top: 25px;">
          <div style="margin-left: 125px">
            <p style="font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 28px;
                color: #000000;">
              Адрес
            </p>
            <br>
            <p style="font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 28px;
                color: #007788;">
              Красноярск, Мате Залки, 10г, 322 кабинет; 3 этаж
              <br>
              Район Северный, район Советский
            </p>
          </div>
        </v-col>
        <v-col style="margin-top: 50px;">
          <div style="font-style: normal;
              font-weight: 400;
              font-size: 24px;
              line-height: 28px;
              text-decoration-line: underline;
              color: #000000;">
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
        </v-col>
      </v-row>
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
    <v-flex>
      <v-img id="licens" style="margin-top: 100px; margin-right: 172px; margin-left: 301px" src="../assets/img.png"
             max-height="2000px"
             max-width="1378px"/>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'main-page',
    data: () => ({
    }),
    methods: {
      scrollToLicens() {
        const el = document.getElementById('licens');
        el.scrollIntoView({ behavior: "smooth" });

      },
      scrollToServices() {
        const el = document.getElementById('services');
        el.scrollIntoView({ behavior: "smooth" });

      }
    }
  }
</script>

<style scoped>

  .backImg {
    background-image: url('../assets/backImg.png');
  }

  .DentistryName >>> .v-input__slot {
    margin-top: 15px !important;
    margin-left: 8px !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    background: #ffffff00 !important;
    width: 226px;
    height: 79px;
  }

  .v-input {
    flex: none !important;
  }


  .DentistryName >>> .v-text-field__slot textarea {
    padding-right: 0 !important;
    margin-top: 0 !important;
    margin-right: 0 !important;
    line-height: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #051557;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .DentistryName >>> .v-text-field__details {
    padding-left: 0 !important;
  }

  .License >>> .v-btn__content {
    width: 200px;
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
    margin-top: 22px !important;
    margin-right: 0 !important;
    margin-left: 0 !important;
    padding: 0 0 !important;
    background: #ffffff00 !important;
    width: max-content;
    height: 44px;
    text-transform: none !important;

  }

  .Description {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;
    color: #4D4D4D;
  }
</style>


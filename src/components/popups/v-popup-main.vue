<template>
  <div class="v-popup-main">
    <div class="v-popup-main__body">
      <div class="v-popup-main__close-popup" @click="closePopup">
        <v-icon>mdi-close</v-icon>
      </div>
      <v-row>
        <h2>Оставить заявку</h2>
      </v-row>
      <v-row
        :class="{'mb-5' : needServices.length <= 1}"
        class="v-popup-main__services-list"
      >
        <v-col>
          <h3>Услуга</h3>
          <v-row
            class="d-flex flex-sm-row"
            :class="{'flex-sm-column' : needServices.length > 1}"
          >
            <v-col
              class="col-sm-8"
              :class="{'col-sm-12' : needServices.length > 1}"
            >
              <v-list flat>
                <v-list-item-group>
                  <v-list-item
                    v-for="(service, i) in needServices"
                    :key="i"
                  >
                    <v-list-item-content>
                      <div class="d-flex justify-space-between align-center pr-sm-3">
                        <span class="v-list-item__title">{{service.title}}</span>
                        <span
                          class="v-list-item__price"
                          v-if="needServices.length > 1"
                        >
                          {{service.price}}
                        </span>
                      </div>
                    </v-list-item-content>
                    <v-list-item-icon
                      v-if="needServices.length > 1"
                    >
                      <v-icon
                        @click="removeService(service)"
                        v-text="'mdi-close-circle-outline'"></v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                  <v-list-item
                    class="d-sm-none"
                    @click="openServices"
                    style="cursor: pointer;"
                  >
                    <v-list-item-content>
                      <div class="d-flex align-center justify-space-between pr-sm-10 v-popup-main__add-service-mibile">
                        <span>Добавить услугу</span>
                        <v-icon>mdi-plus-circle-outline</v-icon>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-col
              @click="openServices"
              class="v-popup-main__add-service d-sm-flex align-center d-none"
              :class="{'mt-5' : needServices.length > 1, 'novalid' : needServices.length == 0}">
              <v-icon>mdi-plus-circle-outline</v-icon> <span>Добавить услугу</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-3">
        <v-col>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-row class="d-flex flex-column flex-sm-row mt-3">
              <v-col>
                <h3>Фамилия</h3>
                <v-text-field
                  outlined
                  background-color="#fff"
                  placeholder="Введите фамилию"
                  v-model="message.lastName"
                  :rules="lastNameRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <h3>Имя</h3>
                <v-text-field
                  outlined
                  background-color="#fff"
                  placeholder="Введите имя"
                  v-model="message.name"
                  :rules="nameRules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex flex-column flex-sm-row">
              <v-col class="col-12 col-sm-4">
                <h3>Телефон</h3>
                <v-text-field
                  outlined
                  background-color="#fff"
                  placeholder="+7"
                  v-model="message.phone"
                  :rules="phoneRules"
                  required
                  maxlength="18"
                  @input="acceptNumber"
                ></v-text-field>
              </v-col>
              <v-col
                v-if="ANIMAL === 'dog'"
                class="col-12 col-sm-4 mb-6 mb-sm-0"
              >
                <h3>Порода животного</h3>
                <my-select
                  :options="breeds"
                  v-model="breed"
                  :rule="breedRule"
                ></my-select>
              </v-col>
              <v-col class="col-12 col-sm-4">
                <h3>Дата</h3>
                <div class="date-picker-field">
                  <v-text-field
                    v-model="message.date"
                    append-icon="mdi-calendar-blank-outline"
                    readonly
                    outlined
                    color="#FEC71A"
                    @click="datePicker = !datePicker"
                    hide-details
                    background-color="#fff"
                  >
                  </v-text-field>

                  <v-date-picker
                    v-if="datePicker"
                    v-model="message.date"
                    locale="ru-RU"
                    no-title
                    color="#FEC71A"
                    scrollable
                    :header-date-format="headerDateFormat"
                    :weekday-format="getDay"
                    :first-day-of-week="1"
                    @input="datePicker = false"
                    v-click-outside="onClickDatePickerOutside"
                  >
                  </v-date-picker>

                </div>
              </v-col>
            </v-row>
            <v-row class="mt-6 mt-sm-0">
              <v-col>
                <h3>Комментарий</h3>
                <v-textarea
                  solo
                  height="110"
                  no-resize
                  hide-details
                  v-model="message.comment"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row class="mt-5">
              <v-col><h4>Всего: {{ finalPrice }}</h4></v-col>
            </v-row>

            <v-row class="d-flex flex-column flex-sm-row align-center mt-3 mt-sm-8">
              <v-col class="col-sm-5 text-center text-sm-justify">
                <button class="btn yellow" @click.prevent="sendForm">
                  Отправить заявку
                </button>
              </v-col>
              <v-col class="v-popup-main__note mt-5 mt-sm-0 text-center text-sm-justify font-weight-bold">
                <p>* Оставьте заявку и мы перезвоним <br> в течение минуты</p>
              </v-col>
            </v-row>

          </v-form>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import phoneFormatter from '@/functions/phoneFormatter'

export default {
  name: 'v-popup-main',
  computed: {
    ...mapGetters([
      'NEED_SEVICES',
      'BREED',
      'BREEDS',
      'ANIMAL',
      'ANIMALS'
    ]),
    needServices() {
      return this.NEED_SEVICES
    },
    finalPrice() {
      return this.needServices.reduce((accumulator, element) => {
        if (element.price.includes('-')) {
          return accumulator + +element.price.split('-')[0].replace(' ', '')
        }
        if (element.price.includes('от')) {
          return accumulator + +element.price.replace(/\D/g, '')
        }
        return accumulator + +element.price
      }, 0)
    }
  },
  data: () => ({
    valid: true,
    phone: '',
    breed: '',
    message: {
      name: '',
      lastName: '',
      phone: '',
      date: new Date().toISOString().substr(0, 10),
      comment: ''
    },
    datePicker: false,
    breeds: [],
    nameRules: [
      v => !!v || 'Введите имя',
    ],
    lastNameRules: [
      v => !!v || 'Введите фамилию',
    ],
    phoneRules: [
      v => !!v || 'Введите телефон',
      v => (v && v.replace(/\D/g, '').length === 11) || 'Длина телефона 11 символов',
    ],
    breedRule: false,
  }),
  watch: {
    breed(b) {
      !b ? this.breedRule = true : this.breedRule = false
    }
  },
  methods: {
    ...mapMutations([
      'RM_SERVICE_FROM_NEED_SERVICE',
    ]),
    ...mapActions([
      'FETCH_TO_TELEGRAM'
    ]),
    async sendForm() {
      if (!this.validate() || this.needServices.length === 0 || !this.breed) {
        return undefined
      }

      let services = this.needServices.reduce((acc, el, i) => {
        return acc + `\n${i + 1}. ${el.title} - ${el.price};`
      }, '')

      const breed = this.ANIMAL === 'cat' ? '' : this.BREEDS.find(breed => breed.value === this.breed).text

      const data = [
        `#Дата: *${this.message.date}*\n`,
        `#Животное: ${this.ANIMALS[this.ANIMAL]}\n`,
        `#Парода: ${breed}\n`,
        `#Услуги: ${services}\n`,
        `#Телефон: ${this.message.phone}\n`,
        `#Клиент: ${this.message.lastName} ${this.message.name}\n`,
        `#Коментарий: \n_${this.message.comment}_`
      ]

      const res = await this.FETCH_TO_TELEGRAM(data)

      if (res === 'ok') {
        this.$emit('sendIsOk')
      }


    },
    validate() {
      const valid = this.$refs.form.validate()
      !this.breed ? this.breedRule = true : this.breedRule = false
      return valid
    },
    openServices() {
      this.$emit('openServices')
    },
    removeService(service) {
      this.RM_SERVICE_FROM_NEED_SERVICE(service)
    },
    acceptNumber() {
      this.message.phone = phoneFormatter(this.message.phone)
    },
    closePopup() {
      this.$emit('closePopup')
    },
    getDay(date){
      const daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
      let i = new Date(date).getDay()
      return daysOfWeek[i]
    },
    headerDateFormat(date) {
      const d = new Date(date)
      const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
      const m = month[d.getMonth()]
      return `${m} ${d.getFullYear()}`
    },
    onClickDatePickerOutside () {
      this.datePicker = false
    },
  },
  mounted() {
    this.breed = this.BREED
    this.breeds = this.BREEDS.slice()
    this.breeds.unshift({text: 'Выберите породу', value: '', type: ''})
  },
};
</script>

<style lang="scss">
.v-popup-main {
  background: $popup-bg;
  // border-radius: 12px;
  width: 100%;
  // max-width: 850px;
  // max-height: 100vh;
  // max-height: 60vh;
  overflow: auto;

  h2 {
    @include fontSet(45, 47.25, 700);
    margin-bottom: 30px;
  }

  h3 {
    @include fontSet(16, 22.4, 500);
    margin-bottom: 10px;
  }

  h4 {
    @include fontSet(25, 40, 700);
  }

  p {
    margin: 0 !important;
  }

  &__note {
    color: #CDD7DC;
  }

  .col {
    padding: 0;
  }

  .v-list {
    border-radius: 5px;
    padding: 0;
  }

  .v-list-item {
    border-bottom: 1px solid $popup-bg;
    @include fontSet(18, 28.8, 600);
    cursor: auto;
    border-width: 0;

    .v-icon {
      cursor: pointer;
    }
    &__title {
      max-width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @include fontSet(18, 28.8, 500);
    }
    &__price {
      max-width: 30%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #CDD7DC;
    }
  }

  &__body {
    padding: 30px 108px 40px 108px;
    height: 100%;
    position: relative;
  }

  &__close-popup {
    position: absolute;
    right: 30px;
    top: 32px;
    cursor: pointer;
    &:hover {
      .v-icon {
        color: $yellow1;
      }
    }
  }

  &__services {
    @include fontSet(18, 28.8, 500);
    padding-left: 25px;
    display: flex;
    align-items: center;
  }
  &__add-service {
    cursor: pointer;
    padding-left: 20px !important;
    display: flex;
    justify-content: flex-end;
    * {
      color: #CDD7DC !important;
    }
    .v-icon {
      margin-right: 5px;
    }
    &.novalid {
      color: red;
      .v-icon {
        color: red;
      }
    }
  }

  &__add-service-mibile {
    * {
      color: $yellow1 !important;
    }
  }

  .v-text-field {
    border-radius: 12px;
    @include fontSet(18, 18, 500);

    .v-input__append-inner {
      margin-right: 12px;
    }

    input {
      padding: 12px;
    }
  }

  .v-text-field--outlined fieldset {
    color: $popup-bg !important;
    border-width: 0;
  }
  .error--text fieldset {
    border-width: 1px;
    color: red !important;
  }

  .v-text-field.error--text fieldset {
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 1px;
      background-color: red;
      right: 10px;
      top: 50%;
      transform: translateY(-75%);
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }

  .v-select.error--text fieldset {
    &::before,
    &::after {
      display: none;
    }
  }

  .v-picker--date {
    position: absolute;
    z-index: 20;
    top: 65px;
    right: 0;
    max-width: none;
    border-radius: 12px;

    .v-date-picker-header {
      height: 50px;
      border-bottom: 1px solid #CDD7DC;
    }
    .accent--text button {
      text-transform: capitalize;
    }

    .v-date-picker-table--date {
      height: 100%;
      padding-bottom: 10px;
    }
  }

  .date-picker-field {
    position: relative;
    @include fontSet(25, 26, 500);

    .v-text-field input {
      cursor: pointer;
    }

    .v-btn__content {
      color: $fc;
    }
  }

  .v-icon.mdi-calendar-blank-outline {
    color: #CDD7DC;
  }

  .v-form {
    .row {
      margin: 0 -20px;
    }
    .col {
      padding: 0 10px;
    }
    .v-input__slot {
      box-shadow: none !important;
    }
  }

  .btn {
    height: 65px !important;
    width: 250px;
  }
}

@media (max-width: $md3+px) {
  .v-popup-main {
    h2 {
      @include fontSet(30, 34, 800);
    }
    &__body {
      padding: 24px 40px 24px 40px;
      // margin-bottom: 60px;
    }
    .btn {
      width: 100%;
    }
  }
}

@media (max-width: 600px) {
  .v-popup-main {
    .v-picker--date {
      // width: 100%;
    }
  }
}

@media (max-width: 330px) {
  .v-popup-main {
    h2 {
      @include fontSet(25, 28, 800);
    }
    &__close-popup {
      position: absolute;
      right: 20px;
      top: 28px;
      cursor: pointer;
    }
  }
}

.datepicker-enter-active, .datepicker-leave-active {
  transition: all .3s;
}

.datepicker-enter, .datepicker-leave-to {
  opacity: 0;
}
</style>

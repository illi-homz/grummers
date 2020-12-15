<template>
  <div class="v-block-consult" id="call">
    <div class="container">
      <div class="v-block-consult__content">
        <h1 class="v-block-consult__title">
          <span>Получить консультацию</span>
        </h1>
        <div class="v-block-consult__info">
          <p>Оставьте свой номер телефона<br class="d-sm-none">и мы вам перезвоним</p>
        </div>

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="mt-4 mt-sm-10"
        >
          <v-row class="d-flex flex-column flex-sm-row">
            <v-col class="pt-0">
              <h3>Имя</h3>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                placeholder="Введите имя"
                background-color="#fff"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col class="pt-0">
              <h3>Телефон</h3>
              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                background-color="#fff"
                outlined
                placeholder="+7"
                required
                maxlength="18"
                @input="acceptNumber"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>

        <button
          class="btn yellow mt-2 mt-sm-n2"
          @click.prevent="sendForm"
        >
          Перезвоните мне
        </button>

      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import phoneFormatter from '@/functions/phoneFormatter'
export default {
  name: 'v-block-consult',
  data: () => ({
    valid: true,
    name: '',
    phone: '',
    nameRules: [
      v => !!v || 'Введите имя',
    ],
    phoneRules: [
      v => !!v || 'Введите телефон',
      v => (v && v.replace(/\D/g, '').length === 11) || 'Длина телефона 11 символов',
    ],
  }),
  methods: {
    ...mapActions([
      'FETCH_TO_TELEGRAM'
    ]),
    acceptNumber() {
      this.phone = phoneFormatter(this.phone)
    },
    async sendForm() {
      if (!this.$refs.form.validate()) {
        return
      }
      const data = [
        '*Запрос консультации*\n',
        `#Имя - ${this.name}\n`,
        `#Телефон - ${this.phone}`
      ]
      const res = await this.FETCH_TO_TELEGRAM(data)
      if (res === 'ok') {
        this.$emit('sendIsOk')
      }
      this.name = ''
      this.phone = ''
    }
  },
};
</script>

<style lang="scss">
.v-block-consult {
  margin-top: 120px;
  min-height: 435px;
  background: url('~@/assets/img/consult-bg.jpg') 100% 100% / contain no-repeat;
  background-color: $consult-bg;

    & p {
      margin: 0 !important;
    }

    h3 {
      @include fontSet(16, 22.5, 500);
    }

		&__content {
      max-width: 630px;
      height: 100%;
      padding-top: 50px;
      margin-left: 100px;
		}

		&__title {
      @include fontSet(45, 47.25, 800);
		}

		&__info {
      @include fontSet(18, 29, 500);
      margin-top: 15px;
    }

    .v-text-field {
      border-radius: 12px;
      @include fontSet(18, 160%, 500);
      margin-top: 8px;

      input {
        padding: 5px;
      }
    }

    .v-text-field--outlined fieldset {
      color: $popup-bg !important;
    }

    .error--text fieldset {
      color: red !important;
    }

    & .btn {
      // margin-top: -30px;
      height: 65px !important;
      width: 250px;
    }

    .v-window-item {
      transition-duration: 1s;
    }
}

@media (max-width: $md2+px) {
  .v-block-consult {

    &__content {
      margin-left: 0;
    }
  }
}

@media (max-width: $md3+px) {
  .v-block-consult {
    display: flex;
    justify-content: center;
    padding: 0 15px 180px 15px;
    margin-top: 50px;

    p {
      text-align: center;
    }

    &__title {
      @include fontSet(30, 31.5, 800);
      text-align: center;
		}

    & .btn {
      width: 100%;
    }
  }
}

</style>

<template>
  <v-dialog
      v-model="value"
      @click:outside="$emit('input', false)"
      content-class="v-send-ok"
  >
    <div class="v-send-ok__body">
      <div
        class="v-send-ok__img"
        :style="`background: url(${img}) center / contain no-repeat`"
      ></div>
      <h1>Заявка принята</h1>
      <h3>Ожидайте звонка в течение 10 минут</h3>
      <button
        class="btn yellow"
        @click="$emit('goToMain')"
      >
        Вернуться на главную
      </button>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'v-send-ok',
  props: {
    value: {
      type: Boolean,
      default: () => false
    }
  },
  data: () => ({
    img: require('@/assets/img/ok.png')
  })
};
</script>

<style lang="scss">
.v-send-ok {
  height: 80vh;
  max-width: 900px;

    h1 {
      @include fontSet(70, 82, 800);
      margin-bottom: 25px;
      text-align: center;
    }

    h3 {
      @include fontSet(30, 35, 500);
      margin-bottom: 80px;
      text-align: center;
    }

		&__body {
      background: $popup-bg;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
		}

		&__img {
      height: 60px;
      width: 90px;
      margin-bottom: 50px;
    }

    .btn {
      width: 100%;
      max-width: 300px;
    }
}

@media (max-width: $md3+px) {
  .v-send-ok {
    height: 100vh;
    max-width: 100vw;
    margin: 0;
    &.v-dialog:not(.v-dialog--fullscreen) {
      max-height: 100%;
    }

    h1 {
      @include fontSet(40, 47, 800);
    }

    h3 {
      @include fontSet(16, 19, 500);
    }

		&__body {
      padding: 0 12px;
      // width: 95%;
      // height: 95%;
		}

		&__img {
		}
}
.btn {
}
.yellow {
}

}

</style>

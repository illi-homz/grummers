<template>
  <section class="v-block-promotions">
    <div class="container">
      <h1 class="title"><p>Акции</p></h1>
      <div
        class="v-block-promotions__banner"
        :style="`background: url(${bg}) 100% / cover no-repeat;`"
      >
        <div class="v-block-promotions__info">
          <p class="v-block-promotions__title">Дарим скидку<br>500 рублей</p>
          <div class="v-block-promotions__text">в зависимости от породы</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'v-block-promotions',
  props: {
    viewPortWidth: {
      type: Number,
      default: () => 0
    }
  },
  data: () => ({
    bgs: [
      require('@/assets/img/promotions-bg.jpg'),
      require('@/assets/img/promotions-bg-md3.jpg')
    ],
  }),
  computed: {
    bg() {
      if (this.viewPortWidth > 1292) {
        return this.bgs[0]
      }
      return this.bgs[1]
    }
  },
};
</script>

<style lang="scss" scoped>
.v-block-promotions {
  margin-top: 100px;

    p {margin: 0;}

		&__banner {
      width: 100%;
      height: 500px;
      position: relative;
      margin-top: 60px;
		}

		&__info {
      position: absolute;
      bottom: 50%;
      left: 95px;
		}

		&__title {
      @include fontSet(50, 59, 800);
    }

    &__text {
      @include fontSet(23, 27, 500);
      margin-top: 15px;
    }
}

@media (max-width: $md3+px) {
  .v-block-promotions {
    margin-top: 70px;

    & .title {
      text-align: center;
      & * {
        @include fontSet(30, 31.5, 800);
        justify-content: center;
      }
    }

		&__banner {
      margin-top: 40px;
      height: 375px;
		}

		&__info {
      left: 40px;
      top: 34px;
      bottom: none;
    }
  }
}

@media (max-width: $md4+px) {
  .v-block-promotions {
    &__title {
      @include fontSet(30, 35, 800);
    }

    &__text {
      @include fontSet(16, 19, 800);
    }
  }
}

</style>

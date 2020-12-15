<template>
  <section class="v-block-zootaxi">
    <div class="container">
      <div class="wrapper">
        <div class="v-block-zootaxi__content">
          <div class="v-block-zootaxi__col">
            <div class="v-block-zootaxi__info">
              <h1 class="v-block-zootaxi__title">ЗооТакси</h1>
              <p class="v-block-zootaxi__text">Заберём, а потом привезём вашего питомца к вам домой после процедуры</p>
            </div>
          </div>
          <div class="v-block-zootaxi__col">
            <div
              class="v-block-zootaxi__img"
              :style="`background: url(${img}) center / cover no-repeat`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'v-block-zootaxi',
  data: () => ({
    img: require('@/assets/img/zootaxi.jpg')
  }),
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}

.v-block-zootaxi {
  margin-top: 110px;

		&__content {
      display: flex;
      background-color: $zootaxi-bg;
		}

		&__col {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
		}

		&__info {
      width: 400px;
		}

		&__title {
      @include fontSet(80, 80, 800);
		}

		&__text {
      margin-top: 25px;
      @include fontSet(20, 25, 500);
		}

		&__img {
      align-self: flex-end;
      width: 520px;
      height: 340px;
      // background-image: url('../../assets/img/zootaxi.jpg') center / cover no-repeat;
		}
}

@media (max-width: $md2+px) {
  .v-block-zootaxi {
    padding: 0 15px;
    margin-top: 70px;

		&__content {
      flex-direction: column;
		}

		&__col {
      width: 100%;
      padding-top: 56px;
		}

		&__info {
      width: 60%;
		}

		&__title {
      @include fontSet(40, 40, 800);
      text-align: center;
		}

		&__text {
      @include fontSet(16, 25, 500);
      text-align: center;
		}

		&__img {
      width: 100%;
		}
}

}


</style>

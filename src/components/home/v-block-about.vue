<template>
  <section class="b-block-about" id="about-us">
    <div class="container">
      <div class="b-block-about__content">
        <h1 class="title center">
          <span>О салоне</span>
        </h1>
        <div class="b-block-about__text">
          <p>Добро пожаловать на сайт нашего салона. Мы молодой вологодский груминг салон, но даём гарантию на качественное обслуживание у профессионалов своего дела, предоставляем полный спектр услуг, дорожим нашими клиентами и любим ваших четвероногих друзей</p>
          <p>Воспользовавшись услугами нашего салона – ваши питомцы покидают его в неотразимой визуальной красоте,
          а вы в прекрасном расположении духа</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'b-block-about',
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.b-block-about {
  padding-top: 50px;
  padding-bottom: 40px;

		&__content {
      max-width: 730px;
      margin: 0 auto;
		}

		&__text {
      @include fontSet(25, 30, 600);
      margin-top: 70px;

        p {
          margin-top: 25px;
          text-align: center;
        }
		}
}

@media (max-width: $md3+px) {
  .b-block-about {

		&__content {
      padding: 0 12px;
    }

    &__content {
      max-width: 80%;
    }

    .title * {
      @include fontSet(30, 31.5, 800);
      margin-bottom: 40px;
    }

    &__text {
      margin-top: 40px;
      @include fontSet(18, 22, 600);
    }
  }

}

@media (max-width: $md4+px) {
  .b-block-about {
    padding-bottom: 20px;
    &__content {
      max-width: 100%;
    }
		&__text {
      @include fontSet(16, 22, 600);
      p {
        margin-top: 20px;
      }
		}
  }

}

</style>

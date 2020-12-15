<template>
  <div class="v-popup-services">
    <div class="v-popup-services__backward" @click="backward">
      <v-icon>mdi-arrow-left</v-icon>
    </div>
    <div class="v-popup-services__body">
      <h2>Добавить услугу</h2>
      <div class="v-popup-services__wrapper">
        <div
          class="v-popup-services__prev"
          @click="prev('currentPage', 'services', 4)"
        ><v-icon>mdi-arrow-left</v-icon></div>

        <div
          class="v-popup-services__next"
          @click="next('currentPage', 'services', 4)"
        ><v-icon>mdi-arrow-right</v-icon></div>

        <div class="v-popup-services__slider">
          <carousel
            class="v-popup-services__carousel"
            :per-page="4"
            :paginationActiveColor="'#FEC71A'"
            :paginationColor="'#CDD7DC'"
            :navigateTo="currentPage"
          >
            <!-- :touchDrag="true" -->
            <slide
              class="v-popup-services__vue-slide"
              v-for="(card, i) in services"
              :key="i"
            >
              <div class="v-popup-services__card">
                <div class="v-popup-services__img"
                  :style="`background: url(${card.img}) center / auto no-repeat`"
                >
                </div>
                <div class="v-popup-services__card-wrap">
                  <div class="v-popup-services__info">
                    <p class="v-popup-services__title">{{ card.title }}</p>
                    <p class="v-popup-services__text" v-if="card.text">{{ card.text }}</p>
                  </div>
                </div>
                <div>
                  <p class="v-popup-services__price">{{card.price}}</p>
                  <p class="v-popup-services__time">{{card.time}}</p>
                  <v-btn
                    v-if="NEED_SEVICES.includes(card)"
                    class="btn v-popup-services__btn yellow"
                    @click="addCardInToNeedServices(card)"
                  >Добавлено</v-btn>
                  <v-btn
                    v-else
                    class="btn v-popup-services__btn"
                    @click="addCardInToNeedServices(card)"
                  >Добавить</v-btn>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>

      <h3>Дополнительные услуги</h3>

      <div class="v-popup-services__wrapper">
        <div
          class="v-popup-services__prev"
          @click="prev('currentPage2', 'addServices', cardOnPage2)"
        ><v-icon>mdi-arrow-left</v-icon></div>

        <div
          class="v-popup-services__next"
          @click="next('currentPage2', 'addServices', cardOnPage2)"
        ><v-icon>mdi-arrow-right</v-icon></div>

        <div class="v-popup-services__slider slider2">
            <carousel
              class="v-popup-services__carousel"
              :per-page="cardOnPage2"
              :paginationActiveColor="'#FEC71A'"
              :paginationColor="'#CDD7DC'"
              :navigateTo="currentPage2"
            >
              <!-- :touchDrag="true" -->
              <slide
                class="v-popup-services__vue-slide"
                v-for="(card, i) in addServices"
                :key="i"
              >
                <div class="v-popup-services__card">
                  <div class="v-popup-services__card-wrap">
                    <div class="v-popup-services__info">
                      <p class="v-popup-services__title slider2">{{ card.title }}</p>
                    </div>
                    <div>
                      <p class="v-popup-services__price">{{card.price}}</p>
                      <v-btn
                        v-if="NEED_SEVICES.includes(card)"
                        class="btn v-popup-services__btn yellow"
                        @click="addCardInToNeedServices(card)"
                      >Добавлено</v-btn>
                      <v-btn
                        v-else
                        class="btn v-popup-services__btn"
                        @click="addCardInToNeedServices(card)"
                      >Добавить</v-btn>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'v-popup-services',
  components: {
    Carousel,
    Slide
  },
  computed: {
    ...mapGetters([
      'NEED_SEVICES',
      'SERVICES',
      'ANIMAL'
    ]),
    services() {
      return this.SERVICES.filter(e => e.animal === this.ANIMAL && e.category !== 'add-services')
    },
    addServices() {
      return this.SERVICES.filter(e => e.category === 'add-services' || e.animal === '')
    }
  },
  data: () => ({
    currentPage: 0,
    cardOnPage: 4,
    currentPage2: 0,
    cardOnPage2: 4,
  }),
  methods: {
    ...mapMutations([
      'ADD_NEED_SERVICES',
      'RM_SERVICE_FROM_NEED_SERVICE'
    ]),
    backward() {
      this.$emit('backward')
    },
    prev(currentPage, services, cardOnPage) {
      if (this[currentPage] === 0) {
        this[currentPage] = Math.ceil(this[services].length / cardOnPage) - 1
      } else {
        this[currentPage]--
      }
    },
    next(currentPage, services, cardOnPage) {
      if (this[currentPage] >= Math.ceil(this[services].length / cardOnPage) - 1) {
        this[currentPage] = 0
      } else {
        this[currentPage]++
      }
    },
    addCardInToNeedServices(card) {
      if (this.NEED_SEVICES.includes(card)) {
        this.RM_SERVICE_FROM_NEED_SERVICE(card)
      }
      else {
        this.ADD_NEED_SERVICES(card)
      }
    }
  },
};
</script>

<style lang="scss">
.v-popup-services {
  width: 100%;
  // max-width: 1050px;
  // max-height: 100%;
  overflow: auto;
  position: relative;

  h2 {
    @include fontSet(45, 47.25, 700);
    margin-bottom: 30px;
  }

  h3 {
    @include fontSet(20, 21, 700);
    margin: 30px 0;
  }

  &__backward {
    position: absolute;
    top: 45px;
    left: 20px;
    z-index: 10;
    width: 65px;
    height: $controls-h+px;
    box-shadow: 0px 4px 6px rgba(46, 84, 103, 0.04), 0px 10px 16px rgba(42, 77, 95, 0.05);
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      .v-icon {
        color: $yellow1;
      }
    }
  }

  &__body {
    background: white;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    padding: 55px 110px 40px 110px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__wrapper {
    position: relative;
  }

  &__prev,
  &__next {
    @include navBtn();
  }

  &__prev {
    left: -45px;
  }

  &__next {
    right: -45px;
  }

  &__slider {
    overflow: hidden;
    height: 450px;
    margin: -15px -10px;
    padding: 15px 0px;
    & > * {
      height: 100%;
    }
    &.slider2 {
      height: 240px;
    }
  }

  &__vue-slide {
    text-align: center;
  }

  &__card {
    height: 100%;
    border: 1px solid white;
    box-sizing: border-box;
    box-shadow: 0px 4px 15px rgba(142, 142, 142, 0.06);
    border-radius: 12px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
    &:hover {
    border: 1px solid $gray1;
    }
  }

  &__img {
    min-height: 33%;
  }

  &__card-wrap {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__info {
    padding-bottom: 10px;
  }

  &__title {
    @include fontSet (16, 22, bold);
    &.slider2 {
      margin-top: 20px;
    }
  }

  &__text {
    @include fontSet (11, 15.4, normal);
    height: 45px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__price {
    @include fontSet (25, 35, bold);
  }

  &__time {
    @include fontSet (11, 15.4, normal);
  }

  &__btn.btn {
    align-self: center;
    width: 90%;
    height: 65px !important;
    background-color: #CDD7DC !important;
    &:hover {
      background-color: $yellow1 !important;
    }
  }

  .VueCarousel-wrapper,
  .VueCarousel-inner,
  &_vueSlide {
    height: 100% !important;
  }
}

@media (max-width: $md3+px) {
  .v-popup-services {
    &__body {
      padding: 24px 40px;
    }
  }
}
</style>

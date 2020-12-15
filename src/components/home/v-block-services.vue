<template>
  <section class="v-block-services" id="services">
    <div class="container">
      <h1 class="title"><span>Услуги</span></h1>

      <div class="v-block-services__filter-btns">
        <v-slide-group
        >
          <v-slide-item
            v-for="(filter, i) in filters"
            :key="i"
            class="my-5"
          >
            <button
              class="btn"
              :class="{'yellow' : activeFilter(filter.animal)}"
              @click="filteredCards(filter.animal)"
            >{{ filter.title }}</button>
          </v-slide-item>
        </v-slide-group>
      </div>

      <transition name="filter-selections">
        <div class="v-block-services__filter-selections" v-if="filter !== ''">
          <h6>Выберете породу вашего любимца и категорию услуг</h6>
          <v-row class="d-flex align-center flex-sm-row flex-column">
            <v-col class="col-12 col-sm-5 col-md-3" v-if="filter === 'dog'">
              <h3 class="mb-3">Парода</h3>
              <my-select
                :options="breeds"
                v-model="breed"
                border
              ></my-select>
            </v-col>
            <v-col class="col-12 col-sm-4 col-md-3">
              <h3 class="mb-3">Категории</h3>
              <my-select
                :options="categories"
                v-model="category"
                border
              ></my-select>
            </v-col>
            <v-col class="align-self-end pb-sm-8" v-if="isClean">
              <div class="v-block-services__clear" @click="clearForm">
                <v-icon>mdi-close-circle-outline</v-icon> Сбросить
              </div>
            </v-col>
          </v-row>
        </div>
      </transition>

      <div class="v-block-services__wrapper">
        <div
          class="v-block-services__prev"
          @click="prev"
        ><v-icon>mdi-arrow-left</v-icon></div>

        <div
          class="v-block-services__next"
          @click="next"
        ><v-icon>mdi-arrow-right</v-icon></div>

        <div class="v-block-services__slider">
          <carousel
            class="v-block-services__carousel"
            :per-page="cardOnPage"
            :paginationActiveColor="'#FEC71A'"
            :paginationColor="'#CDD7DC'"
            :navigateTo="currentPage"
          >
            <slide
              class="v-block-services__vue-slide"
              v-for="(card, i) in filteredServices"
              :key="i"
            >
              <div class="v-block-services__card pt-1 pt-sm-0">
                <div class="v-block-services__img"
                >
                  <img
                    :src="`${card.img}`"
                  ></img>
                </div>
                <div class="v-block-services__card-wrap">
                  <div class="v-block-services__info">
                    <p class="v-block-services__title">{{ card.title }}</p>
                    <p class="v-block-services__text" v-if="card.text">{{ card.text }}</p>
                    <div>
                      <p class="v-block-services__price">{{card.price}}</p>
                      <p class="v-block-services__time" v-if="card.time">{{card.time}}</p>
                    </div>
                  </div>
                  <button
                    class="btn v-block-services__btn"
                    @click="openSendMessagePopup(card)"
                  >Записаться</button>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: 'v-block-services',
  components: {
    Carousel,
    Slide
  },
  props: {
    viewPortWidth: {
      type: Number,
      default: () => 0
    }
  },
  data: () => ({
    mydata: '',
    select: '',
    currentPage: 0,
    model: null,
    filters: [
      {title: 'Все услуги', animal: ''},
      {title: 'Для собак', animal: 'dog'},
      {title: 'Для кошек', animal: 'cat'},
    ],
    filter: '',
    category: '',
    breed: '',
  }),
  computed: {
    ...mapGetters([
      'BREEDS',
      'SERVICES',
      'BREED',
      'CATEGORIES'
    ]),
    isClean() {
      if (this.breed || this.category) {
        return true
      }
      return false
    },
    breeds() {
      return this.BREEDS
    },
    services() {
      return this.SERVICES
    },
    categories() {
      return this.CATEGORIES
    },
    filteredServices() {
      const animalFilter = this.services.filter(card => !this.filter ? card : card.animal === this.filter || card.animal === '')
      if (this.filter === 'dog') {
        return animalFilter.filter(card => !this.category ? card : card.category === this.category)
      }
      else if (this.filter === 'cat') {
        return animalFilter.filter(card => !this.category ? card : card.category === this.category)
      }
      return animalFilter
    },
    cardOnPage() {
      if (this.viewPortWidth > 1304) {
        return 6
      } else if (this.viewPortWidth < 479.98) {
        return 2
      } else if (this.viewPortWidth < 767.98) {
        return 3
      }
      return 4
    }
  },
  watch: {
    breed(data) {
      this.SET_BREED(data)
    },
  },
  methods: {
    ...mapMutations([
      'SET_BREED',
      'SET_NEED_SERVICES',
      'SET_ANIMAL'
    ]),
    filteredCards(val) {
      this.filter = val
    },
    activeFilter(animal) {
      return animal === this.filter
    },
    prev() {
      if (this.currentPage === 0) {
        this.currentPage = Math.ceil(this.filteredServices.length / this.cardOnPage) - 1
      } else {
        this.currentPage--
      }
    },
    next() {
      if (this.currentPage >= Math.ceil(this.filteredServices.length / this.cardOnPage) - 1) {
        this.currentPage = 0
      } else {
        this.currentPage++
      }
    },
    clearForm() {
      // this.$refs.filterForm.reset()
      this.category = ''
      this.breed = ''
    },
    openSendMessagePopup(card) {
      this.SET_ANIMAL(card.animal)
      this.SET_NEED_SERVICES(card)
      this.$emit('openSendMessagePopup')
    }
  },
};
</script>

<style lang="scss">
.filter-selections-enter-active, .filter-selections-leave-active {
  transition: all .3s;
}

.filter-selections-enter, .filter-selections-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}

.v-block-services {
  // padding-top: 100px;
  margin-top: 100px;
    p {
      margin: 0;
    }

    h3 {
      @include fontSet(16, 22.4, 500);
    }

		&__filter-btns {
      margin-left: -10px !important;
      margin: 40px 0 10px 0;
      width: 100%;
      margin-left: -2px;
      & button {
        margin: 2px 20px 2px 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }

    &__filter-selections {
    }

    &__clear {
      cursor: pointer;
    }

    &__wrapper {
      position: relative;
      margin-top: 48px;
    }

    &__prev,
    &__next {
      @include navBtn();
    }

    &__prev {
      left: 30px;
    }

    &__next {
      right: 30px;
    }

		&__slider {
      overflow: hidden;
      height: 470px;
      margin: 0 -14px;
      // margin: -10px -14px;
      padding: 10px 4px;
      & > * {
        height: 100%;
      }
    }

		&__card {
      height: 100%;
      border: 1px solid white;
      box-shadow: 0px 4px 15px rgba(142, 142, 142, 0.06);
      border-radius: 12px;
      margin: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 13px;
      &:hover {
        border: 1px solid $gray1;
      }
		}

    &__vue-slide {
      text-align: center;
      max-width: 50%;
    }

		&__img {
      min-height: 33%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      // background-size: unset;
    }

    &__card-wrap {
      flex: 1 0 auto;
      padding: 8px 13px 13px 13px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

		&__info {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 23px;
    }

    &__title {
      @include fontSet (16, 22, bold);
    }

    &__text {
      @include fontSet (11, 15.4, normal);
      min-height: 45px;
    }

    &__price {
      @include fontSet (25, 35, bold);
      padding-bottom: 10px;
    }

    &__time {
      @include fontSet (11, 15.4, normal);
    }

    &__btn.btn {
      width: 100%;
      height: 65px !important;
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
  .v-block-services {
    padding: 0 12px;
    margin-top: 30px;

    & .title {
      * {
        @include fontSet(30, 31.5, 800);
        justify-content: center;
      }
    }
    &__filter-btns {
      margin-left: -14px !important;
      width: 100vw;
      button {
        margin: 2px 0px 2px 10px;
      }
    }

		&__filters {
      margin: 40px 0;
    }

    &__clear {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 20px;
      .v-icon {
        margin-right: 5px;
      }
    }

    &__wrapper {
      margin-top: 20px;
    }

		&__slider {
      // height: 280px;
      height: 390px;
      margin: 0 -5px;
    }

    &__prev,
    &__next {
      display: none;
    }

		&__card {
      margin: 0 5px;
      padding-bottom: 5px;
      border: 1px solid $gray1;
    }

    &__card-wrap {
      padding-bottom: 5px;
    }

		&__img {
		}

		&__info {
      padding-bottom: 10px;
		}

		&__title {
      // @include fontSet(20, 21, 600);
      @include fontSet(16, 18, 600);
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__text {
      display: none;
    }

		&__price {
      // @include fontSet(20, 21, 700);
      @include fontSet(16, 18, 700);
    }
    &__btn.btn {
    }
  }
}

</style>

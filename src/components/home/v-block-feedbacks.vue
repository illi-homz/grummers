<template>
  <div class="v-block-feedbacks" id="comments">
    <div class="container">
      <h1 class="title center">
        <span>Отзывы</span>
      </h1>

      <div class="v-block-feedbacks__wrapper">
        <div
          class="v-block-feedbacks__prev"
          @click="prev"
        ><v-icon>mdi-arrow-left</v-icon></div>

        <carousel
          class="v-block-feedbacks__carousel"
          :per-page="cardOnPage"
          :paginationActiveColor="'#FEC71A'"
          :paginationColor="'#CDD7DC'"
          :navigateTo="currentPage"
          :touchDrag="true"
        >
          <slide
            class="v-block-feedbacks__vue-slide"
            v-for="(feedback, i) in FEEDBACKS"
            :key="i"
          >
            <div
              class="v-block-feedbacks__slide d-flex flex-column px-8 py-4"
            >
              <!-- <div class="v-block-feedbacks__slide-hover"></div> -->
              <img :src="quoteGray" class="v-block-feedbacks__quotes">
              <img :src="feedback.img" class="v-block-feedbacks__img mb-4">
              <p>{{ feedback.data }}</p>
            </div>
          </slide>
        </carousel>

        <div
          class="v-block-feedbacks__next"
          @click="next"
        ><v-icon>mdi-arrow-right</v-icon></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import {mapGetters} from 'vuex'

export default {
  name: 'v-block-feedbacks',
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
    currentPage: 0,
    isAutoChange: true,
    interval: null,
    quoteYellow: require('@/assets/img/quotes-yellow.svg'),
    quoteGray: require('@/assets/img/quotes-gray.svg'),
  }),
  computed: {
    ...mapGetters([
      'FEEDBACKS'
    ]),
    cardOnPage() {
      if (this.viewPortWidth > 992.98) {
        return 3
      } else if (this.viewPortWidth < 767.98) {
        return 1
      }
      return 2
    }
  },
  methods: {
    prev() {
      this.isAutoChange = false
      if (this.currentPage === 0) {
        this.currentPage = Math.ceil(this.FEEDBACKS.length / 3) - 1
      } else {
        this.currentPage--
      }
    },
    next() {
      this.isAutoChange = false
      if (this.currentPage >= Math.ceil(this.FEEDBACKS.length / 3) - 1) {
        this.currentPage = 0
      } else {
        this.currentPage++
      }
    },
    slideClick(data) {
      console.log(data);
    },
    focusOnSlide() {
      const slides = document.querySelectorAll('.v-block-feedbacks__slide-hover')

      slides.forEach(slide => {
        slide.addEventListener('mouseenter', (event) => {
          const quote = event.target.nextElementSibling
          quote.src = this.quoteYellow
        })
        slide.addEventListener('mouseout', (event) => {
          const quote = event.target.nextElementSibling
          quote.src = this.quoteGray
        })
      })
    }
  },
  watch: {
    isAutoChange(data) {
      if (!data) {
        clearInterval(this.interval)
      }
    }
  },
  mounted() {
    // this.focusOnSlide()
  },
};
</script>

<style lang="scss">
.v-block-feedbacks {
  padding-top: 100px;

    &__wrapper {
      position: relative;
      margin-top: 70px;
    }

    &__carousel {
      overflow: hidden;
    }

    &__prev,
    &__next {
      width: 65px;
      height: $controls-h+px;
      box-shadow: 0px 4px 6px rgba(46, 84, 103, 0.04), 0px 10px 16px rgba(42, 77, 95, 0.05);
      background-color: #fff;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 10;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &:active {
        top: calc(50% + 3px);
      }
      &:hover {
        .v-icon {
          color: $yellow1;
        }
      }
    }

    &__prev {
      left: 30px;
    }

    &__next {
      right: 30px;
    }

    &__vue-slide {
      padding: 0 10px;
      padding-top: 46px;
    }

		&__slide {
      border: 1px solid $feedbacks-border;
      border-radius: 12px;
      min-height: 350px;
      width: 100%;
      align-items: center;
      position: relative;
      margin: 0 auto;

      & p {
        text-align: center;
        @include fontSet(18, 25, 500)
      }
    }

    &__slide-hover {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
    }

    &__quotes {
      position: absolute;
      left: 10px;
      top: -46px;
    }

    &__img {
      border-radius: 50%;
      min-height: 67px;
      max-width: 67px;
    }
}

.VueCarousel-wrapper {
  overflow: visible;
}
.VueCarousel-pagination {
  display: none;
}

@media (max-width: $md2+px) {
  .v-block-feedbacks {
    &__wrapper {
      margin-top: 40px;
    }

    &__prev,
    &__next {
      display: none;
    }

    &__quotes {
    }
    .VueCarousel-pagination {
      display: block;
    }
  }
}

@media (max-width: $md3+px) {
  .v-block-feedbacks {
    padding: 0 15px;
    padding-top: 40px;

    h1 * {
      @include fontSet(30, 31.5, 800);
    }

    &__prev,
    &__next {
      display: none;
    }

    &__vue-slide {
    }

		&__slide {
      min-height: 290px;

      & p {
        @include fontSet(16, 22.5, 500)
      }
    }

    &__quotes {
      left: 0;
    }
  }
}


</style>

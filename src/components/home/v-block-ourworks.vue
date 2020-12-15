<template>
  <section class="v-block-ourworks" id="our-works">
    <div class="container">
      <h1 class="v-block-ourworks__title"><span>Наши работы</span></h1>

      <div class="v-block-ourworks__carousel">

        <v-carousel
          v-model="model"
          :light="true"
          :show-arrows="false"
          height="100%"
          hide-delimiters
          cycle
          :interval="5000"
        >
          <v-carousel-item
            v-for="(work, i) in OUR_WORKS"
            :key="i"
          >
            <article class="v-block-ourworks__slide">
              <div
                class="v-block-ourworks__image"
                :style="`background: url(${work.img}) center / cover no-repeat`"
              ></div>
              <div class="v-block-ourworks__info">
                <h2 class="v-block-ourworks__info-title">{{ work.title }}</h2>
                <div class="v-block-ourworks__info-text"> {{ work.text }}</div>
              </div>
            </article>
          </v-carousel-item>
        </v-carousel>

        <div class="v-block-ourworks__controls">
          <div
            class="v-block-ourworks__prev"
            @click="prevSlide"
          ><v-icon>mdi-arrow-left</v-icon></div>

          <div class="v-block-ourworks__dots">
            <ul>
              <li
                v-for="i in OUR_WORKS.length"
                :key="i"
                :class="{'active-work' : i === model+1}"
                @click="changeslide(i-1)"
              ></li>
            </ul>
          </div>

          <div
            class="v-block-ourworks__next"
            @click="nextSlide"
          ><v-icon>mdi-arrow-right</v-icon></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'v-block-ourworks',
  data: () => ({
    model: 0,
    ourWorks: [

    ]
  }),
  computed: {
    ...mapGetters(['OUR_WORKS'])
  },
  methods: {
    prevSlide() {
      // this.$refs.carousel.prev()
      if (this.model === 0) {
        this.model = 3
      } else {
        this.model--
      }
    },
    nextSlide() {
      this.model++
    },
    changeslide(i) {
      this.model = i
    }
  },
};
</script>

<style lang="scss">
p {
  margin: 0;
  padding: 0;
}
.v-block-ourworks {
  padding-top: 110px;

		&__title {
      @include fontSet(45, 47.25, 800);
      text-align: center;
    }

    &__carousel {
      margin-top: 50px;
      position: relative;
    }

    &__controls {
      width: 415px;
      display: flex;justify-content: space-between;
      align-items: center;
      position: absolute;
      z-index: 10;
      bottom: 0;
      right: 0;
    }

    &__dots {
      & ul {
        display: flex;
      }
      & li {
        height: 8px;
        width: 8px;
        background-color: $zootaxi-bg;
        border-radius: 50%;
        margin: 0 4px;
        cursor: pointer;
      }
      & li.active-work {
        background-color: #FEC71A;
      }
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
      &:active {
        top: calc(50% + 3px);
      }
      &:hover {
        .v-icon {
          color: $yellow1;
        }
      }
    }

    &__slide {
      height: 100%;
      display: flex;
		}

		&__image {
      flex: 1 1 auto;
      height: 560px;
      max-width: 848px;
		}

		&__info {
      flex: 0 1 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 17px;
		}

		&__info-title {
      @include fontSet(19, 20, 700);
      margin-bottom: 25px;
		}

		&__info-text {
      @include fontSet(16, 20, 500);
		}
}

@media (max-width: $md1+px) {
  .v-block-ourworks {
    &__carousel {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__controls {
      position: static;
      margin-top: 10px;
		}
  }
}

@media (max-width: $md2+px) {
  .v-block-ourworks {
    padding: 0 16px;
    padding-top: 72px;

		&__carousel {
      margin-top: 25px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__image {
      height: 450px;
    }

		&__info-title {
      @include fontSet(18, 19, 700);
      margin-bottom: 25px;
		}

		&__info-text {
      @include fontSet(16, 20, 500);
		}

		&__controls {
		}

		&__prev {
      opacity: 0;
		}

		&__next {
      opacity: 0;
		}
  }
}

@media (max-width: $md3+px) {
  .v-block-ourworks {

    h1 * {
      @include fontSet(30, 31.5, 800);
    }

    &__carousel {

    }
    &__image {
      height: 400px;
    }
    &__slide {
      flex-direction: column;
    }
    &__info {
      height: fit-content;
      margin-top: 20px;
    }
    &__controls {
      width: 100vw;
    }
  }
}

@media (max-width: $md4+px) {
  .v-block-ourworks {
    &__image {
      height: 230px;
    }
  }
}

</style>

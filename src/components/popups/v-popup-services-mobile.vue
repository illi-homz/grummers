<template>
  <div class="v-popup-services-mobile">
    <div class="v-popup-services-mobile__backward" @click="backward">
      <v-icon>mdi-arrow-left</v-icon>
    </div>
    <div class="v-popup-services-mobile__body">
      <h2>Добавить услугу</h2>
      <v-row class="d-flex flex-column mb-4">
        <v-col>
          <my-select
            :options="CATEGORIES"
            v-model="category"
            border
          ></my-select>
        </v-col>
        <v-col v-if="category" class="mt-4">
          <div class="v-block-services__clear" @click="category = ''">
            <v-icon>mdi-close-circle-outline</v-icon> Сбросить
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div
            v-for="(service, i) in filteredServices"
            :key="i"
            class="v-popup-services-mobile__card"
            @click="addService(service)"
            :class="{added : NEED_SEVICES.includes(service)}"
          >
            <div
              class="v-popup-services-mobile__img"
              :style="`background: url(${service.img}) center / auto no-repeat`"
            >
            </div>
            <div class="v-popup-services-mobile__info">
              <div>
                <div class="v-popup-services-mobile__title">{{ service.title }}</div>
                <div class="v-popup-services-mobile__text" v-if="service.text">{{ service.text }}</div>
              </div>
              <div class="d-flex justify-space-between align-center">
                <div class="v-popup-services-mobile__time">{{ service.time }}</div>
                <div class="v-popup-services-mobile__price">{{ service.price }}</div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: 'v-popup-services-mobile',
  computed: {
    ...mapGetters([
      'NEED_SEVICES',
      'SERVICES',
      'ANIMAL',
      'CATEGORIES'
    ]),
    filteredServices() {
      const animalFilter = this.SERVICES.filter(card => !this.animal ? card : card.animal === this.animal || card.animal === '')
      return animalFilter.filter(card => !this.category ? card : card.category === this.category)
    },
  },
  data: () => ({
    animal: '',
    category: ''
  }),
  methods: {
    ...mapMutations([
      'ADD_NEED_SERVICES',
    ]),
    backward() {this.$emit('backward')},
    addService(service) {
      this.ADD_NEED_SERVICES(service)
      this.$emit('backward')
    }
  },
  mounted() {
    this.animal = this.NEED_SEVICES[0].animal
  },
};
</script>

<style lang="scss" scoped>
.v-popup-services-mobile {
  border-radius: 12px;
  position: relative;
  // width: 100%;
  max-width: 1050px;
  max-height: 100vh;
  // overflow: auto;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  h2 {
    @include fontSet(30, 34, 800);
    margin-bottom: 30px;
    text-align: center;
    margin-left: 30px;
    margin-top: 10px;
  }

  &__backward {
    position: absolute;
    top: 20px;
    left: 15px;
    z-index: 10;
    width: 38px;
    height: 38px;
    box-shadow: 0px 4px 6px rgba(46, 84, 103, 0.04), 0px 10px 16px rgba(42, 77, 95, 0.05);
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__body {
    background-color: white;
    padding: 55px 110px 40px 110px;
    position: relative;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
  }

  &__card {
    min-height: 130px;
    display: flex;
    border: 1px solid #F5F5F5;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 15px rgba(142, 142, 142, 0.06);
    cursor: pointer;
    &.added {
      border-color: orange;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__img {
    flex: 1 1 auto;
    min-width: 40%;
    display: flex;
  }

  &__info {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 12px 15px 20px;
    overflow: hidden;
  }

  &__title {
    @include fontSet(16, 22.4, 700);
    margin-bottom: 9px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__text {
    @include fontSet(11, 15.4, 400);
  }

  &__time {
    @include fontSet(12, 16.8, 400);
    color: #CDD7DC;
  }

  &__price {
    @include fontSet(18, 25.2, 700);
  }
}

@media (max-width: $md4+px) {
  .v-popup-services-mobile {
    &__body {
      padding: 15px;
    }
  }
}
</style>

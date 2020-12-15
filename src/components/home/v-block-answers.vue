<template>
  <section class="v-block-answers" id="answers">
    <div
      class="v-block-answers__bg"
      :style="`background: url(${bg}) center / 100% 100% no-repeat`"
    ></div>
    <div class="container">
      <h1 class="title center"><span>Ответы на ваши вопросы</span></h1>
      <v-expansion-panels
        accordion
        v-model="panel"
      >
        <v-expansion-panel
          v-for="(question,i) in QUESTIONS"
          :key="i"
        >
          <v-expansion-panel-header
            disable-icon-rotate
          >
            {{ question.question }}
            <template v-slot:actions>
              <v-icon v-if="i === panel">
                mdi-close-circle-outline
              </v-icon>
              <v-icon v-else color="#FEC71A">
                mdi-plus-circle-outline
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div
              v-if="question.type === 'list'"
            >
              <ul>
                <li
                  v-for="(answer, i) in question.answers"
                  :key="i"
                  class="v-block-answers__panel-list"
                >{{ answer }}</li>
              </ul>
            </div>
            <div v-else class="v-block-answers__panel-p">
              {{ question.answer }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'v-block-answers',
  computed: {
    ...mapGetters([
      'QUESTIONS'
    ])
  },
  data: () => ({
    bg: require('@/assets/img/answers-bg.png'),
    panel: null,
  }),
};
</script>

<style lang="scss">
.v-block-answers {
  margin-top: 90px;
  min-height: fit-content;
  // min-height: 100vh;
  // min-height: 50vh;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 180px;
  padding-bottom: 180px;

    h1 {
      margin: 0 !important;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .v-expansion-panels {
      width: 850px;
      margin-top: 70px;
      box-shadow: 0px 25px 50px rgba(50, 93, 116, 0.1) !important;
      @include fontSet(18, 29, 500);
      border-radius: 12px;
    }

    .v-expansion-panel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      &::before {
        box-shadow: none !important;
      }
    }

    .v-expansion-panel-header {
      @include fontSet(16, 16, 700);
      min-height: 70px;
    }

    .v-expansion-panel-content {
    }

    & .title {
      margin-bottom: 70px;
      // text-align: center;
    }

    &__bg {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    &__panel-list {
      position: relative;
      padding-left: 15px;
      &::before {
        content: '';
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: $fc;
        position: absolute;
        left: -20px;
        top: 0;
        transform: translateY(.5rem);
      }
    }
    &__panel-p {
      text-indent: 1rem;
    }
}

// .v-expansion-panel {
//   box-shadow: none !important;
// }

@media (max-width: $md3+px) {
  .v-block-answers {
    padding: 0 16px;
    margin-top: 40px;

    h1 * {
      @include fontSet(30, 31.5, 800);
    }

    .v-expansion-panels {
      margin-top: 40px;
    }

    &__bg {
      display: none;
    }

    & .v-expansion-panels {
      width: 850px;
      @include fontSet(16, 22, 500)
    }

    &__panel-list {
      padding-left: 5px;
    }
  }
}
</style>

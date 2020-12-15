<template>
  <div class="home" >
    <component
      v-model="isPopup"
      :is="popup"
      :viewPortWidth="viewPortWidth"
      @closePopup="closePopup"
      @sendIsOk="sendIsOk"></component>

    <vSendOk
      v-model="isSendOk"
      @goToMain="goToMain"
    />

    <header>
      <main-block />
    </header>
    <main>
      <about-block />
      <services-block
        :viewPortWidth="viewPortWidth"
        @openSendMessagePopup="openPopup"
      />
      <zoo-taxi-block />
      <our-works-block />
      <answers-block />
      <promotions-block
        :viewPortWidth="viewPortWidth"
      />
      <feedbacks-block
        :viewPortWidth="viewPortWidth"
      />
      <consult-block
        @sendIsOk="sendIsOk"
      />
    </main>
    <footer>
      <footer-block />
    </footer>
  </div>
</template>

<script>
import MainBlock from '@/components/home/v-block-main';
import AboutBlock from '@/components/home/v-block-about';
import ServicesBlock from '@/components/home/v-block-services';
import ZooTaxiBlock from '@/components/home/v-block-zootaxi';
import OurWorksBlock from '@/components/home/v-block-ourworks';
import AnswersBlock from '@/components/home/v-block-answers';
import PromotionsBlock from '@/components/home/v-block-promotions';
import FeedbacksBlock from '@/components/home/v-block-feedbacks';
import ConsultBlock from '@/components/home/v-block-consult';
import FooterBlock from '@/components/home/v-block-footer';
import vPopupMain from '@/components/v-popup';
import vSendOk from '@/components/v-send-ok';

import goToBlock from '@/functions/goToBlock'

export default {
  name: 'Home',
  metaInfo() {
    return {
      title: 'Грумминг Вологда',
      // titleTemplate: '%s - Yay!',
      htmlAttrs: {
        lang: 'ru',
        amp: true
    }
    }
  },
  components: {
    MainBlock,
    AboutBlock,
    ServicesBlock,
    ZooTaxiBlock,
    OurWorksBlock,
    AnswersBlock,
    PromotionsBlock,
    FeedbacksBlock,
    ConsultBlock,
    FooterBlock,
    vPopupMain,
    vSendOk
  },
  computed: {
    popup() {
      return 'v-popup-' + this.activePopup
    }
  },
  data: () => ({
    isPopup: false,
    isSendOk: false,
    viewPortWidth: document.documentElement.clientWidth,
    activePopup: 'main',
  }),
  watch: {
    isPopup(data) {
      const home = document.querySelector('.home')
      if (data) {
        home.classList.add('noscroll')
      } else {
        home.classList.remove('noscroll')
      }
    }
  },
  methods: {
    openPopup() {
      this.isPopup = true
    },
    closePopup() {
      this.isPopup = false
    },
    sendIsOk() {
      this.isSendOk = true
    },
    goToMain() {
      this.isSendOk = false
      goToBlock('main')
    }
  },
  mounted() {
    window.addEventListener('resize' , () => {
      this.viewPortWidth = document.documentElement.clientWidth;
    })
  },
  destroyed() {
    window.removeEventListener('resize' , () => {
      this.viewPortWidth = document.documentElement.clientWidth;
    })
  },
}
</script>

<style lang="scss">
</style>

<template>
  <div class="v-block-main" id="main">
    <div
      v-for="(img, i) in bgImgs"
      :key="i"
      class="v-block-main__bg"
      :class="{'_hide-bg' : i !== currentBgImg}"
      :style="`background: url(${img.src}) bottom / cover no-repeat`"
    ></div>

    <v-dialog
      v-model="isMenu"
      fullscreen
      transition="slide-y-transition"
    >
      <div class="v-block-main__menu">
        <ul>
          <li
            v-for="link in links"
            :key="link.src"
          >
            <a :href="link.src" @click="goToBlock">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </v-dialog>

    <div class="container">
      <nav class="v-block-main__navbar">
        <div class="v-block-main__logo">
          <a href="#main">
            <img :src="logoImg">
          </a>
        </div>
        <div class="v-block-main__links">
          <ul>
            <li
            v-for="link in links"
            :key="link.src"
            >
              <a :href="link.src" @click="goToBlock">{{ link.name }}</a>
            </li>
          </ul>
        </div>
        <div
          class="v-block-main__burger"
          @click="showMenu"
        >
          <div
            class="v-block-main__burger-btn"
            :class="{'_close' : isMenu}"
          ></div>
        </div>
      </nav>

      <div class="v-block-main__content">
        <h1 class="v-block-main__title">
          <span>Стрижка <br> домашних <br> животных</span>
        </h1>
        <div class="v-block-main__text">
          <p>Ваша благодарность питомцу <br> за его любовь без остатка</p>
        </div>
        <!-- <a href="#call" @click="goToBlock"></a> -->
        <button href="#call" @click="goToBlock" class="btn yellow">Заказать звонок</button>
      </div>
    </div>
  </div>
</template>

<script>
import goToBlock from '@/functions/goToBlock'

export default {
  name: 'v-block-main',
  data: () => ({
    logoImg: require('@/assets/img/main/logo.svg'),
    timeChaneBg: 5000,
    currentBgImg: 0,
    bgImgs: [
      {src: require('@/assets/img/main/1_dog.jpg')},
      {src: require('@/assets/img/main/2_cat.jpg')},
      {src: require('@/assets/img/main/3_dog.jpg')},
      {src: require('@/assets/img/main/4_cat.jpg')}
    ],
    links: [
      {
        name: 'О салоне',
        src: '#about-us'
      },
      {
        name: 'Услуги',
        src: '#services'
      },
      {
        name: 'Наши работы',
        src: '#our-works'
      },
      {
        name: 'Отзывы',
        src: '#comments'
      },
      {
        name: 'Контакты',
        src: '#contacts'
      },
    ],
    isMenu: false
  }),
  methods: {
    goToBlock(event) {
      event.preventDefault()
      let link = event.target.getAttribute('href').replace('#', '')
      goToBlock(link)
      if (this.isMenu) {
        this.showMenu()
      }
    },
    showMenu() {
      this.isMenu = !this.isMenu
    },
    slidesBg() {
      setInterval(() => {
        if (this.currentBgImg >= this.bgImgs.length-1) {
          this.currentBgImg = -1
        }
        this.currentBgImg++
      }, this.timeChaneBg)
    }
  },
  mounted() {
    this.slidesBg()
  },
};
</script>

<style lang="scss" scoped>
.v-block-main {
  height: 100vh;
  position: relative;

    & .container {
      position: relative
    }

		&__bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all ease 2s;
      &._hide-bg {
        opacity: 0;
      }
    }

    &__menu {
      height: 100%;
      background-color: $menu-bg;
      padding-top: 150px;
      ul {
        padding: 0;
      }
      li {
        margin-bottom: 40px;
        text-align: center;
      }
      a {
        color: $fc;
        @include fontSet(18, 20, 700);
        &:hover {
          border-bottom: 2px solid $fc;
        }
      }
    }

		&__navbar {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: $navb-mt-mw+px;
      z-index: 203;
      left: 0;
      right: 0;
		}

		&__logo {
		}

		&__links {

      & ul {
        display: flex;
        align-items: center;
        padding: 0;
      }
      & li {
        margin-right: 60px;
        text-align: center;
      }
      & a {
        color: $fc;
        @include fontSet(14, 16.5, 700);

        &:hover {
          border-bottom: 2px solid $fc;
        }
      }
    }

    &__burger {
      width: 37px;
      height: 34px;
      background-color: #fff;
      margin-right: 16px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      display: none;
    }

    &__burger-btn {
      background-color: $fc;
      height: 2px;
      width: 12.5px;
      position: relative;
      &::before,
      &::after {
        content: '';
        position: absolute;
        background-color: $fc;
        height: inherit;
        width: inherit;
      }
      &::before {
        top: -4px;
      }
      &::after {
        bottom: -4px;
      }

      &._close {
        animation: burger .5s forwards;
        &::before {
          animation: top-line .7s forwards;
        }
        &::after {
          animation: bottom-line .7s forwards;
        }
      }
      @keyframes burger {100% {background-color: #fff;}}
      @keyframes top-line {
        20% {top: 0;}
        100% {
          top: 0;
          transform: rotate(45deg);
        }
      }
      @keyframes bottom-line {
        20% {bottom: 0;}
        100% {
          bottom: 0;
          transform: rotate(-45deg);
        }
      }
    }

		&__content {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
		}

		&__title {
      @include fontSet(80, 85, 700);
		}

		&__text {
      @include fontSet(18, 23, 600);
      margin: 40px 0;
    }

    .btn {
      width: 305px;
      height: 65px !important;
      border-radius: 12px;
    }
}

@media (max-width: $md2+px) {
  .v-block-main {
    padding: 0 16px;
    max-height: 600px;
    &__navbar {
      margin-top: $navb-mt-md4+px;
    }
    &__links {
      display: none;
      li {
        margin-right: 30px;
      }
    }
    &__burger {
      display: flex;
    }
    &__logo {
      img {
        height: 40px;
      }
    }
    &__content {
      transform: translate(0, -40%);
    }
    &__title {
      @include fontSet(34, 36, 800);
      width: 150px;
    }
    &__text {
      @include fontSet(16, 20, 500);
      width: 250px;
      margin: 20px 0;
    }
  }
}

@media (max-width: $md3+px) {
  .v-block-main {
    padding: 0 32px;
    &__menu-wrap {
      padding-top: 50px;
      li {
        margin-bottom: 30px;
      }
    }
  }
}

@media (max-width: $md4+px) {
  .v-block-main {
    max-height: 405px;
    padding: 0 16px;
    &__navbar {
      z-index: 203;
    }
    &__logo {
      img {
        height: 40px;
      }
    }
    &__content {
      width: 100%;
    }
    .btn {
      width: 100%;
    }
    &__menu-wrap {
      padding-top: 150px;
      li {
        margin-bottom: 40px;
      }
    }
  }
}

@media (max-width: $md4+px) {}

</style>

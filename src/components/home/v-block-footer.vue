<template>
  <div class="v-block-footer" id="contacts">
    <div class="container">
      <div>
        <a href="#main" @click="goToBlock">
          <img :src="logoImg" class="logo">
        </a>
      </div>

      <div class="v-block-footer__links">
        <div>
          <ul class="links">
            <a
              v-for="link in links"
              :key="link.src"
              :href="link.src"
              @click="goToBlock"
            >
              <li>
                <span class="link">{{ link.name }}</span>
              </li>
            </a>
          </ul>
        </div>
        <div>
          <ul class="social-networks">
            <li
            v-for="(social, i) in socialNetworks"
            :key="i"
            >
              <a :href="`https://${social.link}`" target="_blank">
                <img :src="social.logo">
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="v-block-footer__contacts">
        <p>Контакты</p>
        <ul>
            <a
              v-for="(contact, i) in contacts"
              :key="i"
              :href="contact.link"
              :target="contact.blank ? '_blank' : '_self'"
            >
              <!-- target="_blank" -->
              <li>
                <img :src="contact.logo">
                <span class="link">
                  {{ contact.text }}
                </span>
              </li>
            </a>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import goToBlock from '@/functions/goToBlock'

export default {
  name: 'v-block-footer',
  data: () => ({
    logoImg: require('@/assets/img/main/logo.svg'),
    links: [
      {
        name: 'О нас',
        src: '#about-us'
      },
      {
        name: 'Услуги',
        src: '#services'
      },
      {
        name: 'Ответы на вопросы',
        src: '#answers'
      },
    ],
    socialNetworks: [
      {link: 'vk.com/eliyahve', logo: require('@/assets/img/icons/vk.png')},
      {link: 'ok.ru', logo: require('@/assets/img/icons/ok.png')},
      {link: 'https://www.instagram.com/', logo: require('@/assets/img/icons/insta.png')},
    ],
    contacts: [
      {
        link: 'https://yandex.ru/maps/-/CCQ~uBqyxA',
        logo: require('@/assets/img/icons/maps.png'),
        text: 'ул. Калужская 153',
        blank: true
      },
      {
        link: 'tel:+79000000000',
        logo: require('@/assets/img/icons/tel.png'),
        text: '8 900 000 00 00'
      },
      {
        link: 'mailto:groomleta@mail.ru?subject=Вопрос по Груминг',
        logo: require('@/assets/img/icons/mail.png'),
        text: 'groomleta@mail.ru'
      },
    ]
  }),
  methods: {
    goToBlock(event) {
      event.preventDefault()
      let link
      if (event.target.localName === 'span') {
        link = event.target.parentElement.parentElement.getAttribute('href').replace('#', '')
      } else {
        link = event.target.parentElement.getAttribute('href').replace('#', '')
      }
      goToBlock(link)
    },
  },
};
</script>

<style lang="scss">
.v-block-footer {
  min-height: 300px;
  background-color: $footer-bg;
  margin-top: 100px;
  padding-top: 30px;
    ul {
      padding: 0;
    }
    a {
      color: $fc !important;
    }
    p {
      margin: 0;
    }
    .container {
      display: flex;
      justify-content: space-between;
    }
    &__links {
      padding-top: 25px;
      width: 100vw;
      max-width: 350px;
      ul {
        display: flex;
        &.links {
          justify-content: space-between;
          margin-bottom: 35px;
        }
      }
      img {
        margin-right: 8px;
      }
    }
    .link {
      &:hover {
        border-bottom: 1px solid #000;
      }
    }
    &__contacts {
      padding-top: 25px;
      margin-right: 150px;
      p {
        margin-bottom: 30px;
        @include fontSet(14, 16.5, 700);
      }
      li {
        margin-top: 8px;
      }
    }
}

@media (max-width: $md1+px) {
  .v-block-footer {
    &__links {
      width: auto;
      li {
        margin-right: 8px;
      }
      img {
        margin-right: 0;
      }
    }
    &__contacts {
      margin-right: 0;
    }
  }
}

@media (max-width: $md3+px) {
  .v-block-footer {
    padding: 125px 15px 70px 15px;
    position: relative;

    .container {
      flex-direction: column;
      align-items: center;
    }
		&__links {
      width: 100%;
      // align-self: flex-start;
      ul.links {
        flex-direction: column;
        margin-bottom: 60px;

        li {
          margin-top: 30px;
        }
      }
      .social-networks {
        position: absolute;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: row;
      }
		}

		&__contacts {
      padding-top: 0;
      // align-self: flex-start;
		}
  }
}

@media (max-width: $md4+px) {
  .v-block-footer {
		&__links {
      align-self: flex-start;
      align-self: flex-start;
    }
    &__contacts {
      align-self: flex-start;
		}
  }
}
</style>

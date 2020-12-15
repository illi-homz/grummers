export default {
  state: {
    animal: '',
    animals: {
      dog: 'Собака',
      cat: 'Кошка'
    },
    currentBreed: '',
    breeds: [
      {text: 'Выберите породу', value: '', type: ''},
      {text: 'Йоркширский терьер', value: 'york', type: 'dog'},
      {text: 'Шпиц', value: 'shpits', type: 'dog'},
      {text: 'Ши-Тцу', value: 'shi-tsy', type: 'dog'},
      {text: 'Мальтийская балонка/Мальтезе', value: 'malt-bolonka', type: 'dog'},
      {text: 'Бишон Фризе', value: 'bishon-frieze', type: 'dog'},
      {text: 'Афганская борзая /АФГАН', value: 'afgan-borzaya', type: 'dog'},
      {text: 'Пекинес', value: 'pekinez', type: 'dog'},
      {text: 'Американский Кокер-спаниель', value: 'american-koker-spaniel', type: 'dog'},
      {text: 'Аффенпинчер', value: 'affenpitcher', type: 'dog'},
      {text: 'Бассет-Хаунд', value: 'basset-haund', type: 'dog'},
      {text: 'Английский Кокер-спаниель', value: 'england-koker-spaniel', type: 'dog'},
      {text: 'Бобтейл', value: 'bobtail', type: 'dog'},
      {text: 'Акита-Ину', value: 'akita-inu', type: 'dog'},
      {text: 'Бульдог Английский', value: 'buldog-england', type: 'dog'},
      {text: 'Бедлингтон-терьер', value: 'bedlington-terier', type: 'dog'},
      {text: 'Вельш-Корги Пемброк', value: 'velsh-korgi', type: 'dog'},
      {text: 'Китайская хохлатая', value: 'сhinese-hohlataya', type: 'dog'},
      {text: 'Вельштерьер', value: 'velshterier', type: 'dog'},
      {text: 'Бультерьер', value: 'bulterier', type: 'dog'},
      {text: 'Пудель (той и карликовый)', value: 'pudel-toy-and-karlick', type: 'dog'},
      {text: 'Метис/Дворняга', value: 'metis-dvor', type: 'dog'},
      {text: 'Бриар', value: 'briar', type: 'dog'},
      {text: 'Папильон', value: 'papilion', type: 'dog'},
      {text: 'Золотистый ретривер/ голден', value: 'gold-retriver', type: 'dog'},
      {text: 'Алабай', value: 'alabai', type: 'dog'},
      {text: 'Колли', value: 'killi', type: 'dog'},
      {text: 'Вест-Хайленд', value: 'vest-hilend', type: 'dog'},
      {text: 'Чау-Чау', value: 'chau-chau', type: 'dog'},
      {text: 'Ньюфаундленд', value: 'newfaunlend', type: 'dog'},
      {text: 'Пудель (Малый. До 55см в холке)', value: 'litle-pudel', type: 'dog'},
      {text: 'Сеттер', value: 'setter', type: 'dog'},
      {text: 'Мопс', value: 'mops', type: 'dog'},
      {text: 'Грифон', value: 'grifon', type: 'dog'},
      {text: 'Цвергшнауцер', value: 'shwergshnautser', type: 'dog'},
      {text: 'Самоед', value: 'samoed', type: 'dog'},
      {text: 'Ротвейлер', value: 'rotveiler', type: 'dog'},
      {text: 'Мягкошерстный пшеничный терьер', value: 'soft-pshenich-terier', type: 'dog'},
      {text: 'Бигль', value: 'bigle', type: 'dog'},
      {text: 'Московская сторожевая', value: 'moskow-storogevaya', type: 'dog'},
      {text: 'Пудель КОРОЛЕВСКИЙ', value: 'pudel-king', type: 'dog'},
      {text: 'Спрингер-спаниель', value: 'springer-spaniel', type: 'dog'},
      {text: 'Джек-рассел-терьер', value: 'jack-rassel', type: 'dog'},
      {text: 'Лабрадор', value: 'labrador', type: 'dog'},
      {text: 'Маламут', value: 'malamut', type: 'dog'},
      {text: 'Черный русский терьер', value: 'black-rus-terier', type: 'dog'},
      {text: 'Ирландский терьер', value: 'ireland-terier', type: 'dog'},
      {text: 'Немецкая овчарка', value: 'deutsch-ovcharka', type: 'dog'},
      {text: 'Сенбернар', value: 'senbernar', type: 'dog'},
      {text: 'Кавалер Кинг Чарльз спаниель', value: 'kavaler-king-spaniel', type: 'dog'},
      {text: 'Бернский Зенненхунд', value: 'bern-zennenhund', type: 'dog'},
      {text: 'Боксер', value: 'boxer', type: 'dog'}
    ],
    categories: [
      {text: 'Выберите категорию', value: ''},
      {text: 'Гигиена', value: 'hygiene', icon: 'wash'},
      {text: 'Шерсть', value: 'wool', icon: 'barbershop'},
      {text: 'Когти', value: 'claw', icon: 'foot'},
      {text: 'Зубы', value: 'tooth', icon: 'tooth'},
      {text: 'Доп. услуги', value: 'add-services', icon: 'plus-box'},
    ],
    needServices: [],
    services: [
      {title: 'SPA-комплекс', animal: 'dog', price: '1350 - 2400', time: '1.5 часа',
        category: 'hygiene',
        text: 'по восстановлению шерсти с маслом арганы',
        img: require('@/assets/img/services/spa.svg')},
      {title: 'Озонотерапия', animal: 'dog', price: '1700 - 2100', time: '2.5 часа',
        category: 'hygiene',
        text: 'с маской',
        img: require('@/assets/img/services/ozon-mask.svg')},
      {title: 'Озонотерапия', animal: 'dog', price: '1000', time: '1 час',
        category: 'hygiene',
        text: 'без маски',
        img: require('@/assets/img/services/ozon-nomask.svg')},

      {title: 'Вычесывание', animal: 'dog', price: '1000', time: '1 час',
        category: 'wool',
        text: '',
        img: require('@/assets/img/services/comb-out.svg')},
      {title: 'Расчёсывание колтунов', animal: 'dog', price: '1000', time: '1 час',
        category: 'hygwooliene',
        text: 'Дополнительная услуга без релаксанта (2мм) (в присутствии хозяина)',
        img: require('@/assets/img/services/comb-kolts.svg')},
      {title: 'Полный тримминг', animal: 'dog', price: '2000', time: '1 час',
        category: 'wool',
        text: 'ручная щипка',
        img: require('@/assets/img/services/trim.svg')},
      {title: 'Сбривание колтунов', animal: 'dog', price: '500', time: '30 мин',
        category: 'wool',
        text: 'без релаксанта (2мм) (в присутствии хозяина)',
        img: require('@/assets/img/services/trim-kolt.svg')},

      {title: 'Подпил ногтей', animal: 'dog', price: '400 - 600', time: '1 час',
        category: 'claw',
        text: '',
        img: require('@/assets/img/services/foot.svg')},

      {title: 'Ультразвуковая чистка зубов', animal: 'dog', price: '2500 - 4500', time: '1.5 часа',
        category: 'tooth',
        text: '',
        img: require('@/assets/img/services/tooth.svg')},
      {title: 'Снятие зубного камня и налета', animal: 'dog', price: '1000 - 1500', time: '30 мин',
        category: 'tooth',
        text: 'механически',
        img: require('@/assets/img/services/tooth.svg')},
      {title: 'Чистка зубов пастой', animal: 'dog', price: '350 - 550', time: '30 мин',
        category: 'tooth',
        text: '',
        img: require('@/assets/img/services/toothpaste.svg')},
      {title: 'Полировка зубов пастой', animal: 'dog', price: '1000', time: '1 час',
        category: 'tooth',
        text: '',
        img: require('@/assets/img/services/toothpaste.svg')},

      {title: 'Антипаразитальный комплекс', animal: 'dog', price: '400', time: '30 мин',
        category: 'add-services',
        text: '',
        img: require('@/assets/img/services/antiparasite.svg')},
      {title: 'Обработка РЕК', animal: 'dog', price: '200', time: '30 мин',
        category: 'add-services',
        text: '',
        img: require('@/assets/img/services/rek.svg')},
      {title: 'Снятий клеща + обработка раны', animal: 'dog', price: '100', time: '15 мин',
        category: 'add-services',
        text: '',
        img: require('@/assets/img/services/tick.svg')},
      {title: 'Агрессивность животного', animal: 'dog', price: '500 - 1000', time: '',
        category: 'add-services',
        text: 'на усмотрение мастера',
        img: require('@/assets/img/services/bad-animal.svg')},

      // cats
      {title: 'Стрижка', animal: 'cat', price: 'от 850', time: '1 час',
        category: 'wool',
        text: '',
        img: require('@/assets/img/services/barbershop.svg')},
      {title: 'Мытьё', animal: 'cat', price: '250', time: '30 мин',
        category: 'wool',
        text: '',
        img: require('@/assets/img/services/wash.svg')},
      {title: 'Экспресс линька', animal: 'cat', price: '1300', time: '1 час',
        category: 'wool',
        text: '',
        img: require('@/assets/img/services/express-linka.svg')},
      {title: 'Окрашивание шерсти', animal: 'cat', price: 'от 1500', time: '',
        category: 'wool',
        text: 'Дополнительная услуга',
        img: require('@/assets/img/services/color-wool.svg')},
      {title: 'Расчёсывание колтунов', animal: 'cat', price: '600', time: '',
        category: 'wool',
        text: 'В присутствии хозяина',
        img: require('@/assets/img/services/comb-kolts.svg')},
      {title: 'Сбривание колтунов', animal: 'cat', price: '200 - 500', time: '',
        category: 'wool',
        text: 'В присутствии хозяина',
        img: require('@/assets/img/services/trim-kolt.svg')},
      {title: 'Гигиена-комплекс', animal: 'cat', price: '1500', time: '',
        category: 'hygiene',
        text: 'Стрижка когтей,чистка ушей,ультразвуковая чистка зубов,чистка анальных желёз',
        img: require('@/assets/img/services/wash-plus.svg')},

      {title: 'Выведение блох и удаление клещей', animal: 'cat', price: '300', time: '',
        category: 'add-services',
        text: 'Дополнительная услуга',
        img: require('@/assets/img/services/tick.svg')},
      {title: 'Помощь второго грумера', animal: '', price: '600', time: '',
        category: 'add-services',
        text: 'Дополнительная услуга',
        img: require('@/assets/img/services/help-grummer.svg')},
      {title: 'Зоотакси', animal: '', price: 'от 300', time: '',
        category: 'add-services',
        text: 'заберем и привезем обратно после процедуры',
        img: require('@/assets/img/services/zootaxi.svg')},
    ],
  },
  mutations: {
    SET_BREED(state, breed) {
      state.currentBreed = breed
    },
    SET_NEED_SERVICES(state, service) {
      state.needServices = [service]
    },
    SET_ANIMAL(state, animal) {
      state.animal = animal
    },
    ADD_NEED_SERVICES(state, needSerice) {
      if (!state.needServices.includes(needSerice)) {
        state.needServices.push(needSerice)
      }
    },
    RM_SERVICE_FROM_NEED_SERVICE(state, card) {
      state.needServices = state.needServices.filter(e => e !== card)
    },
  },
  getters: {
    BREED: (state) => state.currentBreed,
    BREEDS: (state) => state.breeds.sort((a,b) => {
      if (a.text > b.text) return 1
      if (a.text < b.text) return -1
      return 0
    }),
    NEED_SEVICES: (state) => state.needServices,
    SERVICES: (state) => state.services,
    CATEGORIES: (state) => state.categories,
    ANIMAL: state => state.animal,
    ANIMALS: state => state.animals
  }
}
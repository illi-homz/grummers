<template>
  <div class="my-select">
    <nav
      class="mymenu"
      :class="{'active' : isList, 'border' : border, 'error1' : rule}"
      @click="isList = !isList"
    >
      <p class="mymenu__title">{{text}}</p>
      <transition name="mymenulist">
        <ul
          class="mymenu__list"
          v-if="isList"
          v-click-outside="onClickOutside"
        >
          <li
            v-for="(option, i) in options"
            :key="i"
            class="mymenu__item"
            :class="{'selected' : option.value === value}"
            @click="setValue(option.value)"
          >
            <img v-if="option.icon" :src="require(`@/assets/img/services/${option.icon}.svg`)">
            <span>{{option.text}}</span>
          </li>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: () => ''
    },
    border: {
      type: Boolean,
      default: () => false
    },
    rule: {
      type: Boolean,
      default: () => false
    },
  },
  data: () => ({
    isList: false,
    errorText: ''
  }),
  computed: {
    text() {
      if (this.options.length > 0) {
        return this.options.find(el => el.value === this.value).text
      }
      return 'fff'
    }
  },
  methods: {
    setText() {
      this.text = this.options.find(el => el.value === '').text
    },
    setValue(value) {
      this.$emit('input', value)
    },
    onClickOutside () {
      this.isList = false
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 !important;
  padding: 0 !important;
}
.mymenu {
  position: relative;
  background-color: #fff;
  box-sizing:  content-box !important;
  border: 1px solid white !important;
  height: 56px;
  @include fontSet(18, 19, 500);
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 15px !important;
  padding-right: 30px !important;
  cursor: pointer;
  transition: all .3s;
  &.border {
    border: 1px solid #CDD7DC !important;
  }
  &::before,
  &::after {
    content: '';
    width: 9px;
    height: 1px;
    background-color: $fc;
    position: absolute;
    transition: all .3s;
    top: 50%;
    transform: translateY(-50%);
  }
  &::before {
    right: 20px;
    transform: rotate(45deg);
  }
  &::after {
    right: 14px;
    transform: rotate(-45deg);
  }

  &.active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(45deg);
    }
  }
  &.error1 {
    border: 1px solid red !important;
    &::before,
    &::after {
      background-color: red;
    }
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  &__title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &__list {
    position: absolute;
    box-sizing: inherit;
    left: 50%;
    transform: translateX(-50%);
    top: 100%;
    border: 1px solid #CDD7DC;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    width: 100%;
    background-color: #fff;
    z-index: 100;
    max-height: 350px;
    overflow: auto;
  }
  &__item {
    color: $fc !important;
    padding: 10px 20px !important;
    display: flex;
    align-items: center;

    &.selected {
      background-color: #FEC71A;
    }

    &:hover {
      background-color: #FEC71A;
    }

    img {
      height: 16px;
      margin-right: 10px !important;
    }
  }
}

.mymenulist-enter-active, .mymenulist-leave-active {
  transition: all .3s;
}

.mymenulist-enter, .mymenulist-leave-to {
  opacity: 0;
  max-height: 0;
}

</style>

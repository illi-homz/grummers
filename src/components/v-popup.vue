<template>
  <v-dialog
    content-class="v-popup ma-0"
    v-model="value"
    @click:outside="$emit('input', false)"
    max-width="850px"
  >
    <popupMain
      @closePopup="$emit('input', false)"
      @openServices="openServices"
      @sendIsOk="sendIsOk"
      class="popup-main"
      v-if="isMain"
    />

    <popupServices
      v-if="isServices && viewPortWidth > 767.98"
      @backward="closeServices"
      class="popup-services"
    />

    <popupServicesMobile
      v-if="isServices && viewPortWidth < 767.98"
      @backward="closeServices"
      class="popup-services"
    />
  </v-dialog>
</template>

<script>
import popupMain from './popups/v-popup-main';
import popupServices from './popups/v-popup-services';
import popupServicesMobile from './popups/v-popup-services-mobile';

import {mapGetters, mapMutations} from 'vuex';
export default {
  name: 'v-popup',
  components: {
    popupMain,
    popupServices,
    popupServicesMobile
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    viewPortWidth: {
      type: Number,
      default: () => 0
    }
  },
  data: () => ({
    isMain: true
  }),
  computed: {
    isServices() {
      return !this.isMain
    },
  },
  methods: {
    sendIsOk() {
      this.$emit('closePopup')
      this.$emit('sendIsOk')
    },
    openServices() {
      this.isMain = false
    },
    closeServices() {
      this.isMain = true
    }
  },
  mounted() {
    if (this.BREED) {
      this.message.breed = this.BREED
    }
  },
};
</script>

<style lang="scss">
.v-popup {
  &.v-dialog:not(.v-dialog--fullscreen) {
    max-height: 99%;
  }
}
</style>

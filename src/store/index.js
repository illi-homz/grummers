import Vue from 'vue'
import Vuex from 'vuex'

import services from './services'
import data from './data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    botToken: '1099602765:AAHqQuSvZMqFzjWQLhwHIYV977STJZLRG60',
    chat_id: "256263953"
  },
  mutations: {
  },
  actions: {
    async FETCH_TO_TELEGRAM({getters}, data) {
      const URL = `https://api.telegram.org/bot${getters.BOT_TOKEN}/sendMessage`

      const sendData = data.reduce((acc, el) => {
        return acc + el
      }, '')

      const message = {
        chat_id: getters.CHAT_ID,
        text: sendData,
        parse_mode: "markdown"
      }

      const res = await fetch(URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
      })
      .then((response) => {
        if (response.ok) {
          return 'ok'
        }
      })

      if (res === 'ok') return 'ok'
    }
  },
  getters: {
    BOT_TOKEN: state => state.botToken,
    CHAT_ID: state => state.chat_id
  },
  modules: {
    services,
    data
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import content from "~/store/content";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    content,
  }
})

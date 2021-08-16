import { Content } from "@/Request";
export default {
  namespaced: true,
  state(){
    return{
    loading_news: false,
    error: null,
    }

  },
  getters: {
    loadingContent: state => state.loading_news,
  },
  actions: {
    getContent({ commit }, payload) {
      return new Promise((resolve, reject) => {
        let { type, page_size, page_number, title } = payload;
        commit("CONTENT_INIT");
        Content.getContent(type, page_size, page_number, title)
          .then(response => {
            commit("GET_CONTENT_SUCCESS", response);
            resolve(response);
          })
          .catch(error => {
            commit("CONTENT_ERROR", error);
            reject(error);
          });
      });
    },
  },
  mutations: {
    CONTENT_INIT: state => {
      state.loading_news = true;
    },
    GET_CONTENT_SUCCESS: (state, response) => {
      state.list_content_group = response;
      state.loading_news = false;
    },
    CONTENT_ERROR: state => {
      state.loading_news = false;
    }
  }
};

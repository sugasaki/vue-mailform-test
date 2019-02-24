import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//カウンターのモジュール
const counterModule = {
  namespaced: true,
  state: { count: 0 },
  mutations: {
    increment(state) {
      state.count++;
    },
    increment2(state, addCount) {
      state.count += addCount;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    },
    increment2(context, data) {
      //console.log("increment2", data);
      context.commit("increment2", data);
    }
  }
};

//問い合わせのモジュール
const contactFormModule = {
  namespaced: true,
  state: { values: null, stepActive: 0, isBusy: false },
  getters: {
    values: state => {
      if (state.values === null) return {};
      return state.values;
    },
    isEmpty(state) {
      return state.values === null;
    },
    isBusy(state) {
      return state.isBusy;
    }
  },
  mutations: {
    setValues(state, data) {
      state.values = data;
    },
    clearValues(state) {
      state.values = null;
    },
    stepActive(state, index) {
      state.stepActive = index;
    },
    setIsBusy(state, value) {
      state.isBusy = value;
    }
  },
  actions: {
    setContactValues(context, data) {
      console.log("actions/setContactValues", data);
      context.commit("setValues", data);
    },
    clearContactValues(context) {
      context.commit("clearValues");
    },

    async postContactValues(context) {
      console.log("actions/postContactValues : start");
      context.commit("setIsBusy", true);

      const payload = {
        message: ""
      };

      setTimeout(() => {
        context.commit("setIsBusy", false);
        console.log("actions/postContactValues : setTimeout");
      }, 2000);

      /*
      await axios.post("http://localhost:3000").then(res => {
        payload.message = res.data;
      });

      await axios.post("/user", state.values);
      */

      // context.commit("getMessage", payload);
    }
  }
};

export default new Vuex.Store({
  modules: {
    counter: counterModule,
    contact: contactFormModule
  }
});

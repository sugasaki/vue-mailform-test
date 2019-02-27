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

const productLists = [
  {
    key: "regionA",
    value: "Aサービスについて"
  },
  {
    key: "regionB",
    value: "Bサービスについて"
  },
  {
    key: "regionC",
    value: "Cサービスについて"
  },
  {
    key: "regionOther",
    value: "その他"
  }
];

//問い合わせのモジュール
const contactFormModule = {
  namespaced: true,
  state: { values: null, stepActive: 0, isBusy: false },
  getters: {
    values: state => {
      //console.log("state.values", state.values);
      if (state.values === null) return {};
      return state.values;
    },
    isEmpty(state) {
      return state.values === null;
    },
    isBusy(state) {
      return state.isBusy;
    },
    products() {
      return productLists;
    },
    product(state) {
      let key = state.values.productKey;
      const result = productLists.find(item => item["key"] === key);
      if (!result) return "";

      //console.log("result", result);
      return result["value"];
    }
  },
  mutations: {
    setValues(state, data) {
      state.values = data;
    },
    clearValues(state) {
      state.values = null;
      console.log("state.values", state.values);
    },
    stepActive(state, index) {
      state.stepActive = index;
    },
    setIsBusy(state, value) {
      state.isBusy = value;
    }
  },
  actions: {
    //
    setContactValues(context, data) {
      //console.log("actions/setContactValues", data);
      context.commit("setValues", data);
    },
    clearContactValues(context) {
      //console.log("actions/clearContactValues");
      context.commit("clearValues");
    }
  }
};

export default new Vuex.Store({
  modules: {
    counter: counterModule,
    contact: contactFormModule
  }
});

import { createStore } from "vuex";

const state = {
  count: 0,
}

const mutations = {
  increment(state) {
    state.count++
  }
}

const store = createStore({
  state, mutations
})

export default store
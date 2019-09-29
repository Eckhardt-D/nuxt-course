const axios = require("axios")
const API_URL = "http://localhost:1101/api/v1/contacts"

export const state = () => ({
  contacts: []
})

export const mutations = {
  SET_CONTACTS: (state, payload) => {
    state.contacts = payload
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await axios.get(API_URL)
    commit("SET_CONTACTS", data)
  },

  async getContacts({ commit }) {
    const { data } = await axios.get(API_URL)
    commit("SET_CONTACTS", data)
  },

  async createContact({ dispatch }, payload) {
    await axios.post(API_URL, payload)
    dispatch("getContacts")
  },

  async updateContact({ dispatch }, payload) {
    await axios.put(API_URL, payload)
    dispatch("getContacts")
  },

  async deleteContact({ dispatch }, payload) {
    await axios.delete(API_URL, payload)
    dispatch("getContacts")
  }
}

import { createStore } from 'vuex'
import axios from "axios"
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default createStore({
  state: {
    products: [],
    favourites: [],
  },
  getters: {
    PRODUCTS(state){
      return state.products
    },
    PRODUCT_BY_ID(state){
      return ProductId => {
        return state.products.find(Product => Product.id === ProductId)
      }
    },
    FAVOURITES(state){
      return state.favourites
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) =>{
      state.products = products
    },
    SET_TO_FAVOURITES: (state, favouritesItem) => {
      if (state.favourites.length){
        let ProductExist = false
        state.favourites.map(function(item){
          if (item.id === favouritesItem.id){
            alert("Этот товар был вами уже добавлен")
            ProductExist = true
          }
        })
        if (!ProductExist){
          state.favourites.push(favouritesItem)
        } 
      } else{
        state.favourites.push(favouritesItem)
      }
    },
    DELTE_PRODUCTS(state, {data, getters}){
      getters.FAVOURITES.splice(data,1)
    }
  },
  actions: {
    async GET_PRODCUTS_FROM_DB({commit}){
      try {
        const products = await axios("http://localhost:3000/products", {
          method: "GET"
        })
        commit("SET_PRODUCTS_TO_STATE", products.data)
        return products.data
      } catch (error) {
        console.log("Ошибка при получении продуктов" + error)
        return error
      }
    },
    ADD_TO_FAVOURITES({commit}, favouritesItem){
      commit('SET_TO_FAVOURITES', favouritesItem)
    },
    DELTE_PRODUCTS_FROM_FAVOURITES({commit, getters}, data){
      commit('DELTE_PRODUCTS', {data, getters})
    }
  },
  modules: {
  },
  plugins: [
    vuexLocal.plugin
  ]
})

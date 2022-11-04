<template>
  <section class="dayProduct">
    <div class="container">
        <h2 class="section__title">Рецепты дня</h2>
        <VProductblockItem :Products="this.ProductsItem"></VProductblockItem>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import VProductblockItem from './v-productblock-item.vue';
export default {
    name: "ProductsOfDay",
    computed: {
        ...mapGetters([
            "PRODUCTS"
        ]),
        ProductsItem: function(){
          return this.PRODUCTS.filter(function (ItemProducts) {
            return ItemProducts.ProductOfDay
          })
        }
        
    },
    components: { VProductblockItem },
}
</script>

<style lang="sass" scoped>
.dayProduct
  margin-top: 33px
@media screen and (max-width: $tabletContainer)
  h2.section__title
    text-align: center 
</style>
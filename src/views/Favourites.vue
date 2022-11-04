<template>
  <div>
    <VPreloader></VPreloader>
    <TheHeader></TheHeader>
    <main>
      <VBreadCrumbs>Избранное</VBreadCrumbs>
      <div class="container">
        <h2 class="section__title">Избранное</h2>
        <VProductblockItem v-if="this.FAVOURITES.length > 0" 
        :Products="this.FAVOURITES"
        ></VProductblockItem>
        <p v-else class="section__descript">Похоже, вы пока ничего не выбрали :(</p>
      </div>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import VPreloader from '@/components/v-preloader.vue';
import VBreadCrumbs from '@/components/VBreadCrumbs.vue';
import VProductblockItem from '@/components/v-productblock-item.vue';
import { mapGetters } from 'vuex';
export default {
    name: "VFavourites",
    components: { TheHeader, VPreloader, VBreadCrumbs, VProductblockItem },
    computed: {
      ...mapGetters([
        'FAVOURITES', 
        'PRODUCTS'
      ]),
      ProductsItem: function(){
          return this.PRODUCTS.filter(function (ItemProducts) {
            return ItemProducts.ProductOfDay
          })
      }
    }
}
</script>

<style lang="sass" scoped>
.section__descript
  margin-top: 20px
  color: $braun
  font-size: 16px
</style>
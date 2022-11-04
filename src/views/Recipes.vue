<template>
  <div>
    <VPreloader></VPreloader>
    <TheHeader></TheHeader>
    <main>
        <VBreadCrumbs>Рецепты</VBreadCrumbs>
        <div class="container">
            <h2 class="section__title">Рецепты</h2>
            <p class="section__descript">Здесь вы можете найти любое блюдо по его названию</p>
            <div class="prod">
                <input 
                type="search" 
                class="prod__input" 
                v-model="SerchReceipt"
                placeholder="Введите название блюда"
                >
                <VProductblockItem :Products="GetSortedProducts" v-if="GetSortedProducts.length > 0"></VProductblockItem>
                <p class="error" v-else>Извините, ничего не было найдено</p>
            </div>
            
        </div>
    </main>
  </div>
</template>

<script>
import VPreloader from '@/components/v-preloader.vue';
import TheHeader from '@/components/TheHeader.vue';
import VBreadCrumbs from '@/components/VBreadCrumbs.vue';
import { mapGetters } from 'vuex';
import VProductblockItem from '@/components/v-productblock-item.vue';
export default {
    name: "RecipesPage",
    components: { VPreloader, TheHeader, VBreadCrumbs, VProductblockItem },
    data(){
        return {
            SerchReceipt: ''
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ]),
        GetSortedProducts(){
            return this.PRODUCTS.filter(elem => {
                return elem.title.includes(this.SerchReceipt)
            })
        },
    }
}
</script>

<style lang="sass" scoped>
.error
    margin-top: 10px
    font-size: 18px

.section__descript
    font-size: 21px
    color: $braun
    max-width: 700px
    margin-top: 19px
.prod
    &__input
      width: 100%
      background: $white
      border-radius: 10px
      height: 50px
      padding: 0px 15px
      font-size: 18px
      color: $braun
      border: 1px solid $gray
      margin-top: 20px
</style>
<template>
  <div class="product__block">
    <VProductsCartItem
        v-for="Productsitem in this.Products"
        :key="Productsitem.id"
        :Productsitem="Productsitem"
        @addToCarts="addToCarts"
    ></VProductsCartItem>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VProductsCartItem from './v-products-cart-item.vue';
export default {
    name: "VProductBlock",
    props: {
        Products: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    components: { VProductsCartItem },
    methods: {
        ...mapActions([
            'ADD_TO_FAVOURITES',
        ]),
        addToCarts(data){
            this.ADD_TO_FAVOURITES(data)
        }
    },
    computed: {
        ...mapGetters([
            "FAVOURITES"
        ])
    }
    
}
</script>

<style lang="sass" scoped>
.product
    &__block
        display: grid
        grid-template-columns: repeat(4, 1fr)
        grid-template-rows: 460px
        margin-top: 40px
        row-gap: 30px
@media screen and (max-width: $mainContainer)
    .product
        &__block
            grid-template-columns: repeat(3, 1fr)
@media screen and (max-width: $tabletContainer)
    .product
        &__block
            grid-template-columns: repeat(2, 1fr)
@media screen and (max-width: $smallTabletContainer)
    .product
        &__block
            grid-template-columns: repeat(1, 1fr)
</style>
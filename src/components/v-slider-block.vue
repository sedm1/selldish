<template>
  <section class="slider">
    <h2 class="section__title"><slot></slot></h2>
    <Swiper class="slider__block" 
    :slides-per-view="3"
    :loop="true"
    :speed="700"
    :modules="modules"
    :space-between="10"
    :breakpoints="{
      1150: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
    :autoplay="{
        delay: 1500,
        disableOnInteraction: false,
    }">
        <swiper-slide
            v-for="ProductsItem in this.Products"
            :key="ProductsItem.id"
            >
            <VProductsCartItem 
            :Productsitem="ProductsItem"
            @addToCarts="addToCarts"
            ></VProductsCartItem>
        </swiper-slide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import 'swiper/css';
import VProductsCartItem from './v-products-cart-item.vue';
import { mapActions } from 'vuex';
export default {
    name: "VSliderBLock",
    components: {
        Swiper,
        SwiperSlide,
        VProductsCartItem
    },
    props: {
        Products: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        ...mapActions([
            'ADD_TO_FAVOURITES',
        ]),
        addToCarts(data){
          this.ADD_TO_FAVOURITES(data)
        }
    },
    setup() {
      return {
        modules: [ Autoplay],
        
      };
    },
}
</script>

<style lang="sass" scoped>
.slider
    margin-top: 120px
.section__title
    margin-bottom: 20px
.slider__block
    padding: 20px 0px
</style>
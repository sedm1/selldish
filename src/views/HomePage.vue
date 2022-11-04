<template>
    <VPreloader></VPreloader>
    <section class="mainSection">
        <div class="container">
            <h1 class="main__title">Не знаете, что можно приготовить?</h1>
            <p class="main__descript">Наш сервис  поможет вам подобрать идеальное блюдо</p>
            <div class="link__block">
                <router-link to="/MainPage" class="main__link">На главную</router-link>
            </div>
        </div>
    </section>
</template>

<script>
import VPreloader from '@/components/v-preloader.vue';
export default {
    name: "HomePage",
    components: { VPreloader }
}
</script>

<style lang="sass" scoped>
.mainSection
    +bg
    background-image: url("@/assets/img/mainBg.jpg")
    width: 100%
    height: 100vh
    +flexa 
    justify-content: center
.main
    &__title
        color: $yellow
        text-align: center
        margin-bottom: 38px
        line-height: 100px
    &__descript
        font-weight: 500
        font-size: 22px
        text-align: center
        color: $white
    &__link
        color: $white
        border: 1px solid $white
        padding: 15px 100px
        background: none
        border-radius: 30px
        margin-top: 53px
@media screen and (max-width: 1020px)
    .main
        &__title
            line-height: normal
        &__descript
            font-size: 3vw
@media screen and (max-width: 600px)
    .main
        &__title
            margin-bottom: 20px
        &__link
            width: 90%
            text-align: center
            padding: 10px 0px
            font-size: 14px
            margin-top: 23px
</style>
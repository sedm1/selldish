<template>
  <div class="breadcrumbds">
    <div class="container">
        <ul class="breadcrumbds-list">
            <li><router-link to="/MainPage">Главная</router-link></li>
            <li
            v-for="BreadCrumdsLinksItem in this.BreadCrumdsLinks"
            :key="BreadCrumdsLinksItem.id"
            ><router-link :to="BreadCrumdsLinksItem.links">{{BreadCrumdsLinksItem.title}}</router-link></li>
            <li><slot></slot></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "BreadCrumbs",
    props:{
        BreadCrumdsLinks: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.breadcrumbds-list
    +flexa
    margin: 43px 0px
    li
        color: $braun
        font-size: 16px
        margin-right: 45px
        cursor: pointer
        position: relative
        &:last-child
            margin-right: 0px
            &::after
                display: none
        &::after
            content: ""
            margin-left: 5px
            width: 19px
            height: 1px
            background: $braun
            position: absolute
            top: 50%
            transform: translateY(-50%)
            right: -30px
</style>
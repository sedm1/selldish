<template>
  <section class="productsSteps">
    <div class="container">
      <h2 class="section__title">Пошаговый метод приготовления: </h2>
      <ol class="productsStepsList" v-if="ProductsSteps">
        <li 
        v-for="(ProductsStepsItem, index) in ProductsSteps"
        :key="index"
        >
        <span>Шаг {{index + 1 +"."}}</span>
        {{ProductsStepsItem.title}}
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductsSteps",
  props: {
    ProductsSteps: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.productsSteps
  margin-top: 60px
.productsStepsList
  margin-top: 25px
  li
    font-size: 18px
    margin-bottom: 20px
    max-width: 80%
    &:last-child
      margin-bottom: 8px
    span
      font-weight: 700
      font-size: 20px
      margin-right: 3px
      margin-bottom: 12px
      display: block
      
@media screen and (max-width: $mobileContainer)
  .section__title
    font-size: 5.5vw
  .productsStepsList
    li
      max-width: 100%
</style>
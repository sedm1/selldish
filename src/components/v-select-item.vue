<template>
  <div class="v-select">
    <select class="options" 
    v-model="key" 
    @change="ChangeSelect($event)">
        <option 
        class="options__name"
        :value="optionsItem.value"
        v-for="optionsItem in this.options"
        :key="optionsItem.value"
        >
        {{optionsItem.name}}
        </option>
    </select>
  </div>
</template>

<script>
export default {
    name: "VSelectItem",
    props: {
        options: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            key: ""
        }
    },
    methods: {
      ChangeSelect(data){
        this.$emit('ChangeSelect', data)
      }
    }
}
</script>

<style lang="sass" scoped>
.v-select
    position: relative
    display: block
.options
    max-width: 520px
    width: 100%
    background: $white
    border-radius: 10px
    height: 50px
    padding: 0px 15px
    font-size: 16px
    color: $braun
    border: 1px solid $gray
</style>
<template>
    <transition name="fade">
        <div class="prelodaer__block" v-if="this.show">
            <div class="lds-hourglass"></div>
        </div>
    </transition>
    
  
</template>

<script>
export default {
    name: "VPreloader",
    data(){
        return {
            show: true
        }
    },
    methods: {
        showPreloadToggle(){
            setTimeout(() =>{
                this.show = false
            }, 500)
        }
    },
    mounted(){
        this.showPreloadToggle()
    }
}
</script>

<style lang="sass" scoped>
.prelodaer__block
    +flexa 
    justify-content: center
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100vh
    background: $white
    z-index: 9999999
    
.lds-hourglass 
    display: inline-block 
    position: relative 
    width: 80px 
    height: 80px 
    &:after 
        content: " " 
        display: block 
        border-radius: 50% 
        width: 0 
        height: 0 
        margin: 8px 
        box-sizing: border-box 
        border: 32px solid $yellow
        border-color: $yellow transparent $yellow transparent 
        animation: lds-hourglass 1.5s infinite 
.fade-enter-active, .fade-leave-active 
  transition: opacity 0.7s ease
.fade-enter-from, .fade-leave-to 
  opacity: 0

@keyframes lds-hourglass 
    0% 
        transform: rotate(0) 
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19) 
    50% 
        transform: rotate(900deg) 
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1) 
    100% 
        transform: rotate(1800deg) 
</style>
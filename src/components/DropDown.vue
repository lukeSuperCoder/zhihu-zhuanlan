<template>
  <div class="dropdown" ref="dropDownRef">
    <a a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click="toggleOpen">{{title}}</a>

    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen" >
        <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOustide from '../hooks/useClickOutside'
export default defineComponent({
  name: 'DropDown.vue',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const dropDownRef = ref<null | HTMLElement>(null)
    const isClickOustide = useClickOustide(dropDownRef)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    watch(isClickOustide, () => {
      if (isClickOustide.value && isOpen.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen, toggleOpen, dropDownRef, useClickOustide, isClickOustide
    }
  }
})
</script>

<style scoped>

</style>

import { ref, onMounted, onUnmounted, Ref } from 'vue'
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)
  const hander = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', hander)
  })
  onUnmounted(() => {
    document.removeEventListener('click', hander)
  })
  return isClickOutside
}
export default useClickOutside

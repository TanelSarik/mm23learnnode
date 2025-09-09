<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  color: {
    type: String,
    required: false,
    validator(value) {
      return [
        'primary', 'link', 'info', 'success', 'warning',
        'danger', 'white', 'light', 'dark', 'black'
      ].includes(value)
    }
  },
  closable: {
    type: Boolean,
    default: true,
  }
})

const emit = defineEmits(['close']) 

const show = ref(true)

const classNames = computed(() => {
  let names = ['notification']
  if (props.color) names.push('is-' + props.color)
  return names.join(' ')
})

function close() {
  show.value = false
  emit('close') 
}
</script>

<template>
  <div v-if="show" :class="classNames">
    <button v-if="closable" class="delete" @click="close"></button>
    <slot></slot>
  </div>
</template>



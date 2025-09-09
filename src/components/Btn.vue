<script setup>
import { computed } from 'vue';
 let props = defineProps({
  color: {
    type: String,
    required: false,
    validator(value) {
      return [
        'primary',
        'link',
        'info',
        'success',
        'warning',
        'danger',
        'white',
        'light',
        'dark',
        'text',
        'ghost',
      ].includes(value);
    }
  },
  light: {
    type: Boolean,
    required: false,
  }
});

let classNames= computed(() =>{
   let names = [];
   if(props.color){
    names.push('is-'+ props.color);
   }
   if(props.light){
    names.push('is-light');
   }
  
    return names.join(' ');
})


</script>

<template>
    
  <button class="button" :class="classNames">
    <slot></slot>
  </button>
</template>
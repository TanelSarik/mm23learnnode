<script setup>
const props = defineProps(['active', 'url']);
const emit = defineEmits(['close']);
</script>

<template>
  <div class="modal" :class="{ 'is-active': props.active }">
    <div class="modal-background" @click="emit('close')"></div>
    <div class="modal-content">
        <slot>
            <p class="image is-4by3">
        <img :src="props.url" alt="">
      </p> 
        </slot>
        
    </div>
    <button class="modal-close is-large" aria-label="close" @click="emit('close')"></button>
  </div>
</template>
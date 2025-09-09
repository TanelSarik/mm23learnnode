<script setup>
  import { ref } from 'vue';

  let message = ref('Hello vue');
  setTimeout(() => {
    message.value = 'something else';
  }, 10000);
</script>

<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>
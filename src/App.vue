<script setup>
import { ref } from "vue";

let message = ref("Hello vue");


</script>

<template>
  <div class="container mt-2">
    <input type="input" v-model="message">
    <div class="content">
    <h1>{{ message.split('').reverse().join('')  }}</h1>
    </div>
  </div>
</template>

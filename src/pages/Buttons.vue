<script setup>
import Btn from '../components/Btn.vue';

</script>
<template>
    <div class="container mt-2">
        <btn color="primary" dark size="large" outlined  rounded state="loading"> Button is cool</btn>
        <button class="button is-primary is-outlined is-inverted is-loading">Test button</button>
        <a href="https://google.com" @click.prevent="console.log('hello')">Google</a>
    </div>
</template>
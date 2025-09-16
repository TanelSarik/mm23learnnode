
    <script setup>
import Notification from '../components/Notifications.vue'
import { ref } from 'vue'

const showNotif = ref(true)
</script>

<template>
  <section class="section">
    <div class="container">
      <Notification
        v-if="showNotif"
        color="warning"
        closable
        @close="showNotif = false"
      >
        Edukalt sisse logitud!
      </Notification>

      <button class="button is-link" @click="showNotif = true">
        Notification example
      </button>
    </div>
  </section>
</template>

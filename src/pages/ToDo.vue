<script setup>
import { ref, computed } from "vue";
import ItemList from '../components/ItemList.vue';
let newItem = ref("Hello vue");
let items = ref([
  { text: 'piim', done: true },
  { text: 'viin', done: false },
  { text: 'sai', done: true },
  { text: 'leib', done: false },
  { text: 'olu', done: true },
  { text: 'banaan', done: false },
]);

function add() {
  if (newItem.value.trim() !== "") {
    items.value.push({ text: newItem.value, done: false });
    newItem.value = '';
  }
}

let doneItems = computed(() => items.value.filter(item => item.done));
let toDoItems = computed(() => items.value.filter(item => !item.done));
</script>

<template>
  <div class="container mt-2">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input class="input" type="text" v-model="newItem" @keydown.enter="add" />
      </div>
      <div class="control">
        <button class="button is-info" @click="add">Add</button>
      </div>
    </div>

    <div class="content">
      <h2>Kõik</h2>
      <ItemList :items="items" title="All Items" />

      <h2>Tehtud</h2>
      <ItemList :items="doneItems " title="All Items" />

      <h2>Tegemata</h2>
      <ItemList :items="toDoItems" title="All Items" />
    </div>
  </div>
</template>

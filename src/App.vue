<script setup>
import { ref, computed } from "vue";
let newItem = ref("Hello vue");
let items = ref([
    {text: 'piim' , done: true },
    {text: 'viin' , done: false },
    {text: 'sai' , done: true },
    {text: 'leib' ,done: false },
    {text: 'olu', done: true },
    {text: 'banaan' done: false },
    ]);

function add() {
  if (newItem.value.trim() !== "") {
    items.value.push({text: newItem.value , done: false});
  }
  newItem.value = '';
}

let doneItems = computed(()=>  items.value.filter(item =>  item.done));
let toDoItems = computed(()=>  items.value.filter(item =>  !item.done));
</script>

<template>
  <div class="container mt-2">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input class="input" type="text" v-model="newItem" @keydown.enter="Add">
      </div>
      <div class="control">
        <button class="button is-info" @click="">Add</button>
      </div>
    </div>

    <div class="content">
      <h1>All items</h1>
        <ul>
        <li v-for="item in items">
            {{ item.text }}
            <input type="checkbox" v-model="item.done">
        </li>
      </ul>

      <h1>Done items</h1>
        <ul>
        <li v-for="item in doneItems">
            {{ item.text }}
            <input type="checkbox" v-model="item.done">
        </li>
      </ul>

      <h1>TODo items</h1>
        <ul>
        <li v-for="item in toDoItems">
            {{ item.text }}
            <input type="checkbox" v-model="item.done">
        </li>
      </ul>

    </div>
  </div>
</template>

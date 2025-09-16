<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
let characters = ref([]);
let info = ref ({});
let searchValue = ref ({});
let searchDebounce = null;

getCharacter('https://rickandmortyapi.com/api/character');

function getCharacter(url){
    axios.get(url, {
    params: {
        name: searchValue.value,
    }
}).then(response => {
        console.log(response);
        characters.value =response.data.results;
        info.value =response.data.info;
    });
}

function next(){
    getCharacter(info.value.next);
}
function prev(){
    getCharacter(info.value.prev);
}
function search(){
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(()=> {
        getCharacter('https://rickandmortyapi.com/api/character');
    }, 500);
    
}
</script>
<template>
<div class="container">
    <div class="field has-addons">
        <div class="control is-expanded">
                <input v-model="searchValue" class="input" type="text" placeholder="Search name" @input="search">
        </div>
        
        <div class="control ">
                <button class="button is-info " @click="search">
                        search
                </button>
        </div>
</div>
   <div class="field has-addons">
        <div class="control ">
                <button class="button is-primary" @click="prev" :disabled="!info.prev">prev</button>
        </div>
        
        <div class="control ">
               <button class="button is-primary" @click="next" :disabled="!info.next">next</button>
        </div>
</div>
    
    
    <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="character in characters">
              <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
</div>
</template>
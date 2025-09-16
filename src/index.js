
import './style.scss';
import { createApp } from 'vue';
import App from './App.vue';

import { createMemoryHistory,createWebHashHistory,createWebHistory,  createRouter } from 'vue-router';

import ToDo from './pages/ToDo.vue';
import Modal from './pages/Modal.vue';
import Buttons from './pages/Buttons.vue';
import NotificationExample from './pages/NotificationExample.vue'
import chuckNorris from './pages/chuckNorris.vue';
import RickAndMorty from './pages/RickAndMorty.vue';
import Maps from './pages/maps.vue';

const routes = [
    { path: '/', component: ToDo, name: 'ToDo' },
    { path: '/Modal', component: Modal, name: 'Modals' },
    { path: '/Buttons', component: Buttons, name: 'Buttons' },
    { path: '/NotificationExample', component: NotificationExample, name: 'Notificatons' }, 
    { path: '/chuck', component: chuckNorris, name: 'Chuck Norris' }, 
    { path: '/rickandmorty', component: RickAndMorty, name: 'Rick and Morty' }, 
    { path: '/maps', component: Maps, name: 'maps' }, 
]
const router = createRouter ({
    history: createWebHashHistory(),
    routes,
})



createApp(App).use(router).mount('#app')

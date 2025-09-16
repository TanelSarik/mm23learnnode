import './style.scss';
import { createApp } from 'vue';
import App from './App.vue';

import { createMemoryHistory,createWebHashHistory,createWebHistory,  createRouter } from 'vue-router';

import ToDo from './pages/ToDo.vue';
import Modal from './pages/Modal.vue';
import Buttons from './pages/Buttons.vue';
import NotificationExample from './pages/NotificationExample.vue'
const routes = [
    { path: '/', component: ToDo, name: 'ToDo' },
    { path: '/Modal', component: Modal, name: 'Modals' },
    { path: '/Buttons', component: Buttons, name: 'Buttons' },
    { path: '/NotificationExample', component: NotificationExample, name: 'Notificatons' }, 
]
const router = createRouter ({
    history: createWebHashHistory(),
    routes,
})



createApp(App).use(router).mount('#app')

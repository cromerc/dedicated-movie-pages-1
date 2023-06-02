import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "../style.css";

import HomePage from './pages/HomePage.vue';
import MovieDetailPage from './pages/MovieDetailPage.vue';

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/movie/:id',
        component: MovieDetailPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(router);

app.mount("#app");

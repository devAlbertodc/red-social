import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

//Inicializar rutas para navegar a secciones de la aplicacion:
const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/AboutView.vue"),
	},
	{
		//Solo se importa cuando el usuario quiere visitar la pagina posts:
		path: "/posts",
		name: "posts",
		component: () => import("../views/PostsView.vue"),
	},
	{
		//Solo se importa cuando el usuario quiere visitar la pagina posts:
		path: "/profile",
		name: "profile",
		component: () => import("../views/ProfileView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

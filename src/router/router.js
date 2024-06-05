import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../pages/Home.vue';
import Cocktail from '../pages/Cocktail.vue';
import CocktailRandom from '../pages/CocktailRandom.vue';

import { ROUTES_PATHS } from '../constans';
const routes = [
	{
		path: ROUTES_PATHS.HOME,
		name: ROUTES_PATHS.HOME,
		component: Home,
	},
	{
		path: ROUTES_PATHS.COCKTAIL,
		name: ROUTES_PATHS.COCKTAIL,
		component: Cocktail,
	},
	{
		path: ROUTES_PATHS.COCKTAIL_RANDOM,
		name: ROUTES_PATHS.COCKTAIL_RANDOM,
		component: CocktailRandom,
	},
]

const router = createRouter({
	routes,
	history: createWebHashHistory()
});

export default router;
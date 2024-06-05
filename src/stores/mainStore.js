import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import axios from 'axios';
import {INGREDIENTS_URL, COCKTAILS_BY_INGREDIENT_URL, } from '../constans'

export const useRootStore = defineStore('rootStore', ()=> {
	const ingredients = ref([]);
	const ingredient = ref(null);
	const cocktails = ref([]);

	const getIngredients = async () => {
		const data = await axios.get(INGREDIENTS_URL);
		ingredients.value = data?.data?.drinks;
	};
	const getCocktails = async (ingredient) => {
		const data = await axios.get(`${COCKTAILS_BY_INGREDIENT_URL}${ingredient}`);
		cocktails.value = data?.data?.drinks;
	};
	const setIngredient = val => ingredient.value = val;


	return{
		
		getIngredients,
		ingredients,
		cocktails,
		getCocktails,
		ingredient,
		setIngredient,
	}
});

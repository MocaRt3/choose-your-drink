<template>
	<div v-if="cocktail" class="wrapp">
		<AppLayout :imgUrl="cocktail.strDrinkThumb" >
			<div class="wrapper">
				<div class="info">
					<div class="info__title">{{cocktail.strDrink}}</div>
					<div class="info__line"></div>
					<div class="slider">
						<swiper :slides-per-view="3" :space-between="50" class="swiper"
						>
							<swiper-slide v-for="(ingredient, key) in ingredients" :key="key">	
								<img class="swiper__img" :src="`${INGREDIENT_IMG}${ingredient}-Small.png`" >
								<div class="swiper__name">
									{{ ingredient }}
								</div>
							</swiper-slide>
						</swiper>
					</div>
					<div class="instructions">
						{{ cocktail.strInstructions }}
					</div>
				</div>
			</div>
		</AppLayout>
	</div>
</template>

<script setup>
import axios from 'axios';
import AppLayout from '../components/AppLayout.vue';
import { computed, ref } from 'vue'; 
import {COCKTAILS_RANDOM, INGREDIENT_IMG} from '../constans/api.js';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';



const cocktail = ref(null);

const ingredients = computed(()=>{
	const ingredients = [];

	for(let i = 1; i<=15; i++){
		if(cocktail.value[`strIngredient${i}`]){
			const ingredient =  cocktail.value[`strIngredient${i}`];
			
			ingredients.push(ingredient);
		}else{
			continue 
		}


	}
	return ingredients
});

async function getCocktail(){
	const data = await axios.get(COCKTAILS_RANDOM)
	cocktail.value= data?.data?.drinks[0];
}




getCocktail()

</script>

<style lang="scss" scoped>

.wrapper{
	display: flex;
	align-items: center;
	justify-content: center;
	
}
.info{
	padding: 80px 0;
	text-align: center;
	

	&__select-wrapper{
		padding-top: 50px;
	}

	&__text{
		max-width: 516px;
		margin: 0 auto;
		padding-top: 50px;
		line-height: 36px;
		letter-spacing: 0.1em;
		color: #D3D3D3;
	}

	&__img{
		margin-top: 60px;
	}
}
.slider{
	margin: 50px 0;
}
.swiper{
	width: 586px;

	&__img{
		
	}

	&__name{
		margin: 25px 0 0 0;
	}
}
</style>
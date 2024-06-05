<template>
	<div>
		<AppLayout :imgUrl="'/src/assets/img/photos/dawa-cocktail1.jpg'" :backFunc="removeIngredient" :is-back-button-visible="!!ingredient">
			<div class="wrapper">
				<div v-if="!ingredient || !cocktails" class="info">
					<div class="info__title">{{ $t('Choose your drink') }}</div>
					<div class="info__line"></div>
					<div class="info__select-wrapper">
						<el-select
							v-model="rootStore.ingredient"
							:placeholder="$t('placeholder')"
							size="large"
							filterable
							allow-create
							style="width: 220px"
							class="select"
							
							@change="getCocktails"
							>
							<el-option
								v-for="item in ingredients"
								:key="item.strIngredient1"
								:label="item.strIngredient1"
								:value="item.strIngredient1"
							/>
						</el-select>
					</div>
					<div class="info__text">{{ $t('textInHome') }}</div>
					<img src="../assets/img/photos/home-cocktails.png" alt="COCKTAILS" class="info__img">
				</div>
				<div v-else class="info">
					<div class="info__title">COCKTAILS WITH {{ingredient}} </div>
					<div class="info__line"></div>
					<div class="info__cocktails cocktails">
						<CocktailThumb v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail"/>
					</div>
				</div>
			</div>
		</AppLayout>
	</div>
</template>

<script setup>
import AppLayout from '../components/AppLayout.vue';
import CocktailThumb from '../components/CocktailThumb.vue';
import { useRootStore,  } from '../stores/mainStore';
import { storeToRefs } from 'pinia';
import {ref, computed} from 'vue';

const rootStore = useRootStore();



rootStore.getIngredients()
const {ingredients, ingredient ,cocktails} = storeToRefs(rootStore);


const getCocktails = () => rootStore.getCocktails(rootStore.ingredient);
function removeIngredient(){
	rootStore.setIngredient(null)
};

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


.cocktails{
	display: flex;
	flex-wrap: wrap;
	max-height: 400px;
	overflow-y: auto ;
	margin-top: 60px;
	justify-content: center;
	column-gap: 55px;
	row-gap: 30px;
	
}
</style>
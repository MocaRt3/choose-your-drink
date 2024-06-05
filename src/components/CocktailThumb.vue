<template>
	<div>
		<div class="root">
			<router-link :to="`/cocktails/${cocktail.idDrink}`" >
				<div class="root__pic" :style="`background-image: url(${cocktail.strDrinkThumb})`"></div>
				<div class="root__name">{{ cocktail.strDrink }}</div>
			</router-link>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	cocktail: {
		type: Object,
		required: true,
	}
});
</script>

<style lang="scss" scoped>
.root {
	width: 120px;

	&__pic{
		width: 120px;
		height: 120px;
		background-repeat: no-repeat;
		background-size: cover ;
		margin: 0 auto;
	}
	&__name{
		margin: 0 auto;
		font-family: Raleway;
		font-size: 16px;
		font-weight: 400;
		line-height: 18.78px;
		letter-spacing: 0.1em;
		text-align: center;
		color: #D3D3D3;
		margin: 20px 0 0 0;

	}
}
</style>
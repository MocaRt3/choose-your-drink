<template>
	<div>
		<div class="root">
			<div :style="`background-image: url(${imgUrl})`" class="root__img"></div>
			<div class="root__main main">
				<div class="main__btns btns">
					<el-button @click="goBack" type="primary" :icon="Back" circle class="btns__back"
						v-if="isBackButtonVisible" />
					<el-button class="main__button " @click="goForCocktailRandom">{{$t('Get random cocktail')}}</el-button>
					<div>
						<div v-if="languages">
							<span v-for="(lng, index) in Object.keys(languages)" :key="lng">
							<a v-if="$i18next.resolvedLanguage !== lng" v-on:click="$i18next.changeLanguage(lng)">
								{{ languages[lng].nativeName }}
							</a>
							<strong v-if="$i18next.resolvedLanguage === lng">
								{{ languages[lng].nativeName }}
							</strong>
							<span v-if="index < (Object.keys(languages).length - 1)">&nbsp;|&nbsp;</span>
							</span>
						</div>
					</div>
				</div>

				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script setup>
import {
	Back
} from '@element-plus/icons-vue'
import { ROUTES_PATHS } from '../constans';
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';

const props = defineProps({
	imgUrl: {
		type: String,
		required: true,
	},
	backFunc: {
		type: Function,

	},
	isBackButtonVisible: {
		type: Boolean,
		default: true,
	}
});

const languages = {
        en: { nativeName: 'English' },
        ru: { nativeName: 'Русский' }
      }

const route = useRoute();
const router = useRouter();

const routeName = computed(() => route.name)

function goForCocktailRandom() {
	router.push(ROUTES_PATHS.COCKTAIL_RANDOM);

	if (routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
		router.go();
	}
}

function goBack(){
	props.backFunc ? props.backFunc() : router.go(-1);
}
</script>

<style lang="scss" scoped>
.root {
	background: #141141;
	min-height: 100vh;
	display: flex;

	&__img {
		width: 50%;
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: cover;
	}

}

.main {
	position: relative;
	width: 50%;
	padding: 32px 40px;
}

.main__button {
	position: absolute;
	top: 32px;
	right: 40px;
	background-color: #FF0F82;
	border-color: #FF0F82;
	color: #fff;
	cursor: pointer;
	font-size: 16px;
	font-family: 'Raleway', sans-serif;
	transition: all 0.4s ease;
}

.main__button:hover {
	transform: scale(110%);
}

.btns {
	display: flex;
	align-items: center;
	column-gap: 20px;

	&__back {
		background: transparent;
		border-color: #fff;
		transition: all 0.4s;
	}

	&__back:hover {
		border-color: #FF0F82;
	}
}
</style>
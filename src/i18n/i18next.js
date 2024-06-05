import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next

  .use(LanguageDetector)

  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
			'Choose your drink': "Choose your drink",
			'Get random cocktail': "Get random cocktail",
			placeholder: "Choose main ingredient",
			textInHome: "Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.",
        },
      },
	  ru: {
		translation: {
			'Choose your drink': "Выбери свой напиток",
			'Get random cocktail': "Получить рандомный коктейль",
			placeholder: "Выберите основной ингредиент",
			textInHome:"Попробуйте наши вкусные рецепты коктейлей на любой случай. Найдите вкусные рецепты коктейлей по ингредиентам с помощью нашего генератора коктейлей.",
		}
	  }
    }
  });

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}
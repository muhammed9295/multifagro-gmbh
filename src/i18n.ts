import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import enTranslations from './locales/en/translation.json'
import deTranslations from './locales/de/translation.json'
import frTranslations from './locales/fr/translation.json'
import itTranslations from './locales/it/translation.json'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: enTranslations },
			de: { translation: deTranslations },
			fr: { translation: frTranslations },
			it: { translation: itTranslations },
		},
		lng: 'de',
		fallbackLng: 'en',
		debug: false,
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
			lookupLocalStorage: 'i18nextLng',
		},
	})

export default i18n


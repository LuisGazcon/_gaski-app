import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@resources/locales/en/';
import es from '@resources/locales/es/';

i18n.use(LanguageDetector).init({
	debug: process.env.NODE_ENV === 'development',
	ns: ['common'],
	fallbackLng: 'en',
	defaultNS: 'common',
	fallbackNS: 'common',
	resources: {
		'en': en,
		'en-US': en,
		'en-UK': en,
		'en-AU': en,
		'en-NZ': en,
		'en-CA': en,
		'es': es,
		'es-US': es,
		'es-AR': es,
		'es-BO': es,
		'es-CL': es,
		'es-CO': es,
		'es-CR': es,
		'es-DO': es,
		'es-EC': es,
		'es-ES': es,
		'es-GT': es,
		'es-HN': es,
		'es-MX': es,
		'es-NI': es,
		'es-PA': es,
		'es-PE': es,
		'es-PR': es,
		'es-PY': es,
		'es-SV': es,
		'es-UY': es,
		'es-VE': es,
	},
	detection: {
		order: ['cookie', 'localStorage', 'sessionStorage', 'navigator'],
		caches: ['cookie', 'localStorage'],
		lookupCookie: 'i18next',
		lookupLocalStorage: 'i18nextLng',
		lookupSessionStorage: 'i18nextLng',
	},
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;

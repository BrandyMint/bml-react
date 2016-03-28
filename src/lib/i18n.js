import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const i18nResources = require(
  'i18next-resource-store-loader!assets/i18n/index.js'
);

i18n
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    // returnObjects: true,
    resources: i18nResources,
  });


if (typeof window !== 'undefined') {
  window.i18n = i18n;
  if (window.backendLang) {
    i18n.changeLanguage(window.backendLang);
  }
}

export default i18n;

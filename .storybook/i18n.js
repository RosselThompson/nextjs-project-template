import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../public/locales/en/common.json';
import translationES from '../public/locales/es/common.json';


i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      translation: translationEN,
    },
    es:{
      translation: translationES,
    }
  },
});

export default i18n;

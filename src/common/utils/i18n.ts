import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../assets/locales/en/translation.json';
import ru from '../../assets/locales/ru/translation.json';

export const LANGUAGES = new Map([
  ['en', 'English'],
  ['ru', 'Русский'],
]);

const resources = {
  en: {
    translation: en
  },
  ru: {
    translation: ru
  },
};

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: Array.from(LANGUAGES.keys()),
    resources: resources,
  });

export default i18n;